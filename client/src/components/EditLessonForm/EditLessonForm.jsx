import React, { useReducer, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../Form-Input/Form-Input";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ActionButton } from "../../styles";

import lessonService from "../../services/lesson";
import { editUserLesson } from "../../redux/actions/userActions";
import {
  QuillContainer,
  BodyContainer,
  HeaderText,
  FormContainer,
  CreateContainer,
  PlusContainer,
  ModalsContent,
} from "./EditLessonForm.elements";
import { Modal, PlusForm } from "../index";

import { FaPlus } from "react-icons/fa";

const initialState = {
  title: "",
  description: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const EditLessonForm = ({
  creatorid,
  lessonID,
  setShowModal,
  setUpdateFlag,
  updateFlag,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, description } = state;
  const plus = { color: "white", fontSize: "2.5em" };
  const [showPlusModal, setShowPlusModal] = useState(false);

  const {
    user: { id },
  } = useSelector((state) => state.userDetail);

  const stylequill = {
    background: "white",
    height: "35em",
    width: "54em",
    minheight: "100% ",
    overflowy: "auto",
  };

  console.log(lessonID);

  // redux
  const storeDispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await lessonService.getLessonData(lessonID);
      const { title, description } = response;
      dispatch({ field: "title", value: title });
      dispatch({ field: "description", value: description });
    };

    fetchData();
  }, [lessonID]);

  const params = useParams();
  //console.log(params);
  //console.log(lessonID);

  const handleSubmit = async (e) => {
    console.log("Please");

    e.preventDefault();

    if (!title) {
      console.log("Please Enter All Fields");
      return;
    }

    let newObject = { ...state };

    try {
      storeDispatch(editUserLesson(lessonID, newObject));

      if (updateFlag) {
        setUpdateFlag(updateFlag + 1);
      }

      setShowModal(false);
    } catch (error) {
      console.log("An Error Occurred");
    }

    setShowModal(false);
  };

  const handleInput = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  return (
    <React.Fragment>
      {showPlusModal && (
        <Modal small setShowModal={setShowPlusModal}>
          <PlusForm lessonID={lessonID} setShowModal={setShowPlusModal} />
        </Modal>
      )}

      <BodyContainer>
        <Fragment>
          <br />
          <HeaderText>Edit Lesson</HeaderText>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormInput
                type="text"
                name="title"
                label="title"
                value={title}
                onChange={handleInput}
              />
            </FormContainer>
          </form>

          <br />

          <br />

          <br />
          <br />

          <PlusContainer>
            <button onClick={() => setShowPlusModal(true)}>
              <span>
                <FaPlus style={plus} />
              </span>
            </button>
          </PlusContainer>

          <br />

          <CreateContainer>
            <ActionButton fullWidth type="submit" value="Upload">
              Update Lesson
            </ActionButton>
          </CreateContainer>
        </Fragment>
      </BodyContainer>
    </React.Fragment>
  );
};

export default EditLessonForm;
