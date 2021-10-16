import React, { Fragment, useRef, useState } from "react";
import {
  AssignmentContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
} from "./AssignmentLesson.elements";

import { FaClipboard } from "react-icons/fa";
import { CreateAssignmentForm, Modal, AssignmentCard } from "../index";

const AssignmentLesson = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateAssignmentForm setShowModal={setShowModal} />
        </Modal>
      )}
     
        
       
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
      

     

    
    </Fragment>
  );
};

export default AssignmentLesson;