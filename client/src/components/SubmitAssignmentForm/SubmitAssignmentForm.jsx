import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { addUserResource } from '../../redux/actions/userActions';
//import { addGroupResource } from '../../redux/actions/groupPageActions';

//import { addLesson } from '../../redux/actions/userActions';

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { BodyContainer } from "./SubmitAssignmentForm.elements";
import { QuillContainer } from "./SubmitAssignmentForm.elements";

import { CreateContainer } from "./SubmitAssignmentForm.elements";

import { createGroupAction } from "../../redux/actions/userActions";

import { Modal } from "../index";

import { HeaderText } from "./SubmitAssignmentForm.elements";

import { ActionButton } from "../../styles";

const SubmitAssignmentForm = () => {
  const [type] = useState("Text");
  const [value, setValue] = useState("");

  const [title] = useState("");
  const [description] = useState("");

  const {
    user: { id },
  } = useSelector((state) => state.userDetail);

  const stylequill = {
    background: "white",
    height: "35em",
    maxwidth: "inherit",
    minheight: "100% ",
    overflowy: "auto",
  };

  const [showModal, setShowModal] = useState(false);

  //redux
  const storeDispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      console.log("Please Enter All Fields");
      return;
    }

    const newLessonObject = {
      lessonname: title,
      lessondescription: description,

      createdby: id,
    };

    try {
      storeDispatch(createGroupAction(newLessonObject));
    } catch (error) {
      console.log(error);
    }

    setShowModal(false);
  };

  return (
    <React.Fragment>
      {showModal && <Modal small setShowModal={setShowModal} />}

      <BodyContainer>
        <Fragment>
          <br />
          <HeaderText>Submit Assignment</HeaderText>

          <form onSubmit={handleSubmit}>
            <QuillContainer>
              {type === "Text" && (
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  style={stylequill}
                />
              )}
            </QuillContainer>
            <br />

            <CreateContainer>
              <ActionButton edit fullWidth type="submit" value="Upload">
                Submit Assignment
              </ActionButton>
            </CreateContainer>
          </form>
        </Fragment>
      </BodyContainer>
    </React.Fragment>
  );
};

export default SubmitAssignmentForm;
