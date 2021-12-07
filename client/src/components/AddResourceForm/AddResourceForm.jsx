import React, { useReducer, Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserResource } from "../../redux/actions/userActions";
import { addGroupResource } from "../../redux/actions/groupPageActions";
import { addLessonResource } from "../../redux/actions/lessonsActions";
import { addAssignmentResource } from "../../redux/actions/assignmentActions";
import FormInput from "../Form-Input/Form-Input";
import axios from 'axios';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axFactoryService from "../../services/axFactory";
import {
  ButtonGroup,
  FileInput,
  TypeField,
  SelectResourceText,
  TypeButton,
  HeaderText,
} from "./AddResourceForm.elements";

import { ActionButton } from "../../styles";

const initialState = {
  title: "",
  description: "",
  link: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const AddResourceForm = ({
  creatorid,
  GroupId,
  lessonID,
  setShowModal,
  assignmentID,
  isWithAssignments,
  userID
}) => {
  const [type, setType] = useState("Link");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [value, setValue] = useState("");

  

  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, description, link } = state;

  //redux
  const storeDispatch = useDispatch();

  console.log(assignmentID);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      console.log("Please Enter All Fields");
      return;
    }

    const formData = new FormData();

    if (type === "File") {
      console.log("A file was uploaded");
      console.log(fileName);

      for (let i = fileName.length; i >= 0; i--) {
        if (fileName[i] === ".") {
          formData.append("type", fileName.slice(i + 1));
          break;
        }
      }

      // formData.append('type', type);
    } else {
      console.log("A Link was uploaded");
      formData.append("type", "Link");
    }

    formData.append("title", title);

    if (value) {
      formData.append("description", value);
    } else {
      formData.append("description", description);
    }

    formData.append("mutable", false);
    formData.append("fileName", fileName);

    if (type === "Link") {
      formData.append("link", link);
    } else if (type === "File") {
      formData.append("file", file);
    }

    let newObject = {};

    console.log("Group ID:");
    console.log(GroupId);

    console.log("Lesson ID:");
    console.log(lessonID);

    console.log("Assignment ID:");
    console.log(assignmentID);

    console.log("CreatorId:");
    console.log(creatorid);

    if (GroupId) {
      formData.append("GroupId", GroupId);
      newObject = { ...state, mutable: true, GroupId: GroupId };
    }

    if (lessonID) {
      formData.append("LessonId", lessonID);
      newObject = { ...state, mutable: true, creatorid: creatorid, LessonId: lessonID };
    }

    if (assignmentID) {
      console.log("Assignment id "+ assignmentID)
      formData.append("AssignmentId", assignmentID);
      newObject = { ...state, mutable: true,  AssignmentId: assignmentID };
    }

    if (creatorid) {
      formData.append("creatorid", creatorid);
      newObject = { ...state, mutable: true, creatorid: creatorid };
    }

    if (userID) {
      formData.append("creatorid", userID);
      newObject = { ...state, mutable: true, creatorid: userID};
    }

    try {
      if (GroupId) {
        // storeDispatch(addGroupResource(newObject));
        let ax = axFactoryService.genAx();
        const resp = await ax.get("/updateGroup?group="+ GroupId);
        storeDispatch(addGroupResource(formData));
        setShowModal(false);
      } 
      
      else if (lessonID){
        console.log(lessonID);
        storeDispatch(addLessonResource(formData));
        setShowModal(false);
      } 

      else if (assignmentID){
        console.log(assignmentID);
        storeDispatch(addAssignmentResource(formData));
        setShowModal(false);
      } 

      else {
        // storeDispatch(addUserResource(newObject));
        storeDispatch(addUserResource(formData));
        setShowModal(false);
      }
      
      

    } catch (error) {
      console.log(error.toString());
    }
  };

  const handleInput = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const togglePagesTwoThree = (e) => {
    let page2 = document.getElementById("create-assignment-page2");
    page2.classList.toggle("is-active");

    let page3 = document.getElementById("create-assignment-page3");
    page3.classList.toggle("is-active");
  };
  return (
    <Fragment>
      <HeaderText>Add Resource</HeaderText>
      <form onSubmit={handleSubmit}>
        <SelectResourceText>Select Resource Type:</SelectResourceText>
        <ButtonGroup>
          <TypeButton type="button" onClick={() => setType("Link")}>
            Link
          </TypeButton>
          <TypeButton type="button" onClick={() => setType("File")}>
            File
          </TypeButton>
          <TypeButton type="button" onClick={() => setType("Text")}>
            Text Editor
          </TypeButton>
        </ButtonGroup>
        <TypeField>
          <h3>Type: {type}</h3>
        </TypeField>

        <FormInput
          type="text"
          name="title"
          label="Title"
          value={title}
          onChange={handleInput}
        />
        {(type === "Link" || type === "File") && (
          <FormInput
            type="text"
            name="description"
            label="Description"
            value={description}
            onChange={handleInput}
          />
        )}

        {/* <FormInput
          type="text"
          name="description"
          label="Description"
          value={description}
          onChange={handleInput}
        /> */}
        {type === "Link" && (
          <FormInput
            type="text"
            name="link"
            label="Link URL"
            value={link}
            onChange={handleInput}
          />
        )}

        {type === "File" && (
          <FileInput>
            <input type="file" onChange={handleChange} />
          </FileInput>
        )}
        <br />
        <br />
        <br />
        {type === "Text" && (
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        )}

          
      
          <ActionButton edit fullWidth type="submit" value="Upload">
            Create Resource
          </ActionButton>
        
      </form>
    </Fragment>
  );
};

export default AddResourceForm;