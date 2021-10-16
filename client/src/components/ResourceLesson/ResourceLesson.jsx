import React, { Fragment, useRef, useState } from "react";
import {
  ResourceContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
} from "./ResourceLesson.elements";

import { FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm} from "../index";

const ResourceLesson = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal large setShowModal={setShowModal}>
          <AddResourceForm setShowModal={setShowModal} />
        </Modal>
      )}
      
        
          <h1>My Resources</h1>
          <InnerContainer>
            <Content>
              <VerticalLine />
              <FaClipboard />
              <p> You do not have any Reources</p>
              <button onClick={() => setShowModal(true)}>
                {" "}
                Create {" "}
              </button>
            </Content>
          </InnerContainer>
            
      
    </Fragment>
  );
};

export default ResourceLesson;