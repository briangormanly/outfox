import React, { Fragment, useState } from "react";
import { addLessonAssignment } from "../../redux/actions/lessonsActions";
import { createLessonAction } from "../../redux/actions/userActions";
import {
  NoAssignmentsContainer,
  AssignmentsContainer,
  SelectAssignmentContainer,
  AddAssignmentButton,
  InnerContainer,
  Content,
  VerticalLine,
  SelectButtonContainer,
} from "./AssignmentLesson.elements";

import lessonService from "../../services/lesson.js";

import { useDispatch, useSelector } from "react-redux";

import { FaClipboard } from "react-icons/fa";
import { CreateAssignmentForm, Modal } from "../index";

const AssignmentLesson = ({ lessonID, setShowModal }) => {
  const { user } = useSelector((state) => state.userDetail);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const style = { color: "black" };

  const { Assignments } = user;

  const dispatch = useDispatch();

  const addLessonAssignment = async (assignmentID) => {
    const response = await lessonService.getLessonData(lessonID);

    console.log(assignmentID);
    console.log(lessonID);

    const { Assignments, description, title } = response;

    const newObject = {
      Assignments,
      description,
      title,
    };
    console.log(newObject);

    dispatch(createLessonAction(newObject, Assignments));
  };

  return (
    <Fragment>
      {showAssignmentModal && (
        <Modal setShowModal={setShowAssignmentModal}>
          <CreateAssignmentForm
            lessonID={lessonID}
            setShowModal={setShowAssignmentModal}
          />
        </Modal>
      )}

      <h1>My Assignments</h1>

      <InnerContainer>
        <Content>
          <br />
          {Assignments.length > 0 ? (
            <div>
              <button onClick={() => setShowAssignmentModal(true)}>
                Create
              </button>
              {Assignments.map((assignment) => (
                <SelectAssignmentContainer>
                  <h1 style={style}> {assignment.title}</h1>
                  <SelectButtonContainer>
                    <button
                      primary="true"
                      onClick={() => addLessonAssignment(assignment.id)}
                    >
                      Select
                    </button>
                  </SelectButtonContainer>
                  <br />
                </SelectAssignmentContainer>
              ))}
              <AddAssignmentButton onClick={() => setShowModal(false)}>
                Add Assignment
              </AddAssignmentButton>
            </div>
          ) : (
            <NoAssignmentsContainer>
              <VerticalLine />
              <FaClipboard />
              <p> You do not have any assignments</p>
              <button onClick={() => setShowAssignmentModal(true)}>
                Create Assignment
              </button>
            </NoAssignmentsContainer>
          )}
        </Content>
      </InnerContainer>
    </Fragment>
  );
};

export default AssignmentLesson;
