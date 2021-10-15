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
import AssignmentCardSmall from "../AssignmentCardSmall/AssignmentCardSmall";

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

      <AssignmentContainer>
        <TitleContainer>
          <h1>My Assignments</h1>
          <InnerContainer>
            <Content>
              <AssignmentCardSmall
                name={"AssignmentName"}
                description={"AssignmentDescription"}
              />
            </Content>
          </InnerContainer>
        </TitleContainer>
      </AssignmentContainer>

      {/*<AssignmentCard isOwner={true} />*/}
      {/*<AssignmentCard isOwner={false} />*/}
    </Fragment>
  );
};

export default Assignments;
