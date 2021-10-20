/*import React, { Fragment, useState } from "react";
import {
  AssignmentContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
} from "./Assignments.elements";

import { FaClipboard } from "react-icons/fa";
import {
  CreateAssignmentForm,
  Modal,
  AssignmentCard,
  //AssignmentAllCards,
  SubmitAssignmentForm,
} from "../index";*/

import React from "react";
import { useSelector } from "react-redux";

import { AssignmentAllCards } from "../index";
import {
  AssignmentContainer,
  Content,
  InnerContainer,
  TitleContainer,
} from "./Assignments.elements";

/*const Assignments = () => {
  const [showCreateAssignmentModal, setShowCreateAssignmentModal] = useState(
    false
  );

  const [showSubmitAssignmentModal, setShowSubmitAssignmentModal] = useState(
    false
  );

  return (
    <Fragment>
      {showCreateAssignmentModal && (
        <Modal setShowModal={setShowCreateAssignmentModal}>
          <CreateAssignmentForm setShowModal={setShowCreateAssignmentModal} />
        </Modal>
      )}

      {showSubmitAssignmentModal && (
        <Modal setShowModal={setShowSubmitAssignmentModal}>
          <SubmitAssignmentForm setShowModal={setShowSubmitAssignmentModal} />
        </Modal>
      )}
      {/!*without assignments*!/}
      <AssignmentContainer>
        <button onClick={() => setShowCreateAssignmentModal(true)}>
          Create Assignment{" "}
        </button>
        <TitleContainer>
          <h1>My Assignments</h1>
          <InnerContainer>
            <Content>
              <VerticalLine />
              <FaClipboard />
              <p> You do not have any assignments</p>
              <button onClick={() => setShowCreateAssignmentModal(true)}>
                {" "}
                Create Assignment{" "}
              </button>
            </Content>
          </InnerContainer>
        </TitleContainer>

        <TitleContainer>
          <h1>Shared Assignments</h1>
          <InnerContainer>
            <Content>
              <VerticalLine />
              <FaClipboard />
              <p> You do not have any shared assignments</p>
            </Content>
          </InnerContainer>
        </TitleContainer>
      </AssignmentContainer>

      {/!*with assignments*!/}
      {/!*      <AssignmentContainer>
        <TitleContainer>
          <h1>My Assignments</h1>
          <InnerContainer>
            <Content>
              <AssignmentAllCards
                name={"AssignmentName"}
                description={"AssignmentDescription"}
              />
            </Content>
          </InnerContainer>
        </TitleContainer>
      </AssignmentContainer>*!/}

      {/!*<AssignmentCard mutable={true} />*!/}
      <AssignmentCard
        mutable={false}
        setShowSubmitAssignmentModal={setShowSubmitAssignmentModal}
      />
    </Fragment>
  );
};*/

const Assignments = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { Assignments } = user;

  return (
    <AssignmentContainer>
      <button> Create Assignment </button>
      <TitleContainer>
        <h1>My Assignments</h1>
        <InnerContainer>
          <Content>
            {Assignments.map((assignment) => (
              <AssignmentAllCards key={assignment.id} {...assignment} />
            ))}
          </Content>
        </InnerContainer>
      </TitleContainer>
    </AssignmentContainer>
  );
};
export default Assignments;
