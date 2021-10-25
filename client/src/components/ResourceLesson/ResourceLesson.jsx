import React, { Fragment, useRef, useState } from "react";
import {
  ResourceContainer,
  InnerContainer,
  Content,
  VerticalLine,
  ChildContainerDropdown,
  ChildeContainer,
  ResourceContainer1,
  ButtonContainer
} from "./ResourceLesson.elements";

import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useSelector } from 'react-redux';
import {ResourceCard } from '../index';

import { FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm} from "../index";
import { ActionButton } from '../../styles';

const ResourceLesson = () => {

  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.userDetail);
  const { Resources } = user;
  const style = { color: "black"};


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
              <p> You do not have any Resources</p>
              <button onClick={() => setShowModal(true)}>
                Create 
              </button>
            </Content>
            </InnerContainer>

            <br />
            <br />


     
          {Resources.map((resource) => (
                
            <React.Fragment>
                  <ResourceContainer1>
                    <h1 style = {style} >{resource.title}</h1>
                   
                    <ButtonContainer>
                    <button >  
                    <span>Select</span>    
                    </button>
                    </ButtonContainer>
                  </ResourceContainer1>
                    
                    <br></br>
                    
            </React.Fragment>
                
            ))}
     


          <ActionButton 
            edit fullWidth type="submit" 
            value= "Upload"
            //onClick ={() => addLink(CreateLessonForm.ReactQuill, resource, url)} 
            >
            Add Resource
          </ActionButton>
            
      
    </Fragment>
  );
};

export default ResourceLesson;