import React, { Fragment, useState } from "react";
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
} from "../index";

const Assignments = () => {
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
      {/*without assignments*/}
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

      {/*with assignments*/}
      {/*      <AssignmentContainer>
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
      </AssignmentContainer>*/}

      {/*<AssignmentCard isOwner={true} />*/}
      <AssignmentCard
        isOwner={false}
        setShowSubmitAssignmentModal={setShowSubmitAssignmentModal}
      />
    </Fragment>
  );
};

export default Assignments;
