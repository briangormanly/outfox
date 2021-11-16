import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import { AssignmentCard, CreateAssignmentForm, Modal } from "../index";
import {
  AssignmentContainer,
  Content,
  InnerContainer,
  TitleContainer,
  NoAssignmentsContainer,
  VerticalLine,
} from "./Assignments.elements";
import { FaClipboard } from "react-icons/fa";

const Assignments = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { Assignments } = user;

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateAssignmentForm setShowModal={setShowModal} />
        </Modal>
      )}
      <AssignmentContainer>
        <button onClick={() => setShowModal(true)}> Create Assignment </button>
        <TitleContainer>
          <h1>My Assignments</h1>
          <InnerContainer>
            <Content>
              {Assignments.map((assignment) => (
                //using AssignmentCard instead of AssignmentAllCards because AssignmentAllCards does not show title/description
                <AssignmentCard
                  key={assignment.id}
                  id={assignment.id}
                  title={assignment.title}
                  description={assignment.description}
                />
              ))}

              {Assignments.length < 1 && (
                <NoAssignmentsContainer>
                  <FaClipboard />
                  <VerticalLine />
                  <p> You do not have any assignments</p>
                  <button onClick={() => setShowModal(true)}>
                    Create Assignment
                  </button>
                </NoAssignmentsContainer>
              )}
            </Content>
          </InnerContainer>
        </TitleContainer>
      </AssignmentContainer>
    </Fragment>
  );
};
export default Assignments;
