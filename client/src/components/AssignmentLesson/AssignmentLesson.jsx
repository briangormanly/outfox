import React, { Fragment, useState } from "react";
import {addLessonAssignment} from "../../redux/actions/lessonsActions";
import {createLessonAction} from "../../redux/actions/userActions";
import {
  AssignmentContainer,
  AssignmentContainer1,
  InnerContainer,
  Content,
  VerticalLine,
  ButtonContainer,
} from "./AssignmentLesson.elements";

import lessonService from '../../services/lesson.js';

import { useDispatch, useSelector } from 'react-redux';

import { FaClipboard } from "react-icons/fa";
import { CreateAssignmentForm, Modal } from "../index";


const AssignmentLesson = ({lessonID, setShowModal}) => {

  const { user } = useSelector((state) => state.userDetail);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const style = { color: "black"};

  const { Assignments } = user;

  const dispatch = useDispatch();

  const addLessonAssignment = async (assignmentID) => {
    const response = await lessonService.getLessonData(lessonID);

    console.log(assignmentID);
    console.log(lessonID);

    const { Assignments, description, title} = response;
  
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
          <CreateAssignmentForm lessonID = {lessonID} setShowModal={setShowAssignmentModal} />
        </Modal>
      )}

        <h1>My Assignments</h1>
          
          <InnerContainer>
          <Content>

                    <button onClick={() => setShowAssignmentModal(true)}>
                    Create 
                    </button>
                    <br />

              {Assignments.map((assignment) => (

                  <AssignmentContainer1>
                  <h1 style = {style} > {assignment.title}</h1>

                  <ButtonContainer>
                  <button primary = "true" onClick={() => addLessonAssignment(assignment.id)}> 
                  Select
                  </button>
                  </ButtonContainer>

                  <br/>
                </AssignmentContainer1>
              ))}

                  <br />
                  <button onClick={() => setShowModal(false)}>          
                  Add
                  </button>
 
              {Assignments.length < 1 && (
                <AssignmentContainer>
                <VerticalLine />
                <FaClipboard />
                <p> You do not have any assignments</p>
                <button onClick={() => setShowAssignmentModal(true)}>
                Create Assignment
                </button>
                </AssignmentContainer>
              )}

            </Content>
          </InnerContainer>
    </Fragment>
  );
};

export default AssignmentLesson;