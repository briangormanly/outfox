import React, { Fragment, useRef, useState } from "react";
import {
  AssignmentContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
} from "./Assignments.elements";

import { FaClipboard } from "react-icons/fa";
import { CreateAssignmentForm, Modal, AssignmentCard } from "../index";

const Assignments = () => {
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
              <VerticalLine />
              <FaClipboard />
              <p> You do not have any assignments</p>
              <button onClick={() => setShowModal(true)}>
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

      <AssignmentCard />
    </Fragment>
  );
};

export default Assignments;
