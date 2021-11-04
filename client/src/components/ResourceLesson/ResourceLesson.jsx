import React, { Fragment, useRef, useState } from "react";
import ReactDOM, { render } from "react-dom"
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
//import "react-quill/dist/react-quill.js";
//import reactQuill from "react-quill/dist/react-quill.js";


import { useSelector } from 'react-redux';
import {ResourceCard } from '../index';

import { FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm} from "../index";
import { ActionButton } from '../../styles';

import Child from './ResourceLesson';

function Parent(resourceID) {
  const [data, setData] = useState(0);
  
  const parentToChild = () => {
    setData(resourceID);
  };

  console.log(data);
  
  return(
    
  <Child parentToChild = {data} />
  
  )
}

const ResourceLesson = ({setShowModal}) => {

  const [ showAddModal, setShowAddModal ] = useState(false);
  const { user } = useSelector((state) => state.userDetail);
  const { Resources } = user;
  const style = { color: "black"};

  const [ selection, setSelection ] = useState('');

  var i = 0;
 

  return (
    <Fragment>
      {showAddModal && (
        <Modal large setShowModal={setShowAddModal}>
          <AddResourceForm setShowModal={setShowAddModal} />
        </Modal>
      )}
      
          <h1>My Resources</h1>
          {/*
          <InnerContainer>
            <Content>
              <VerticalLine />
              <FaClipboard />
              <p> You do not have any Resources</p>
              <button onClick={() => setShowAddModal(true)}>
                Create 
              </button>
            </Content>
            </InnerContainer>
          */}
            <br />
            <br />


     
          {Resources.map((resource) => (
                
            <React.Fragment>
                  <ResourceContainer1>
                    <h1 style = {style} >{resource.title}</h1>
                   
                    <ButtonContainer>
                    <button primary = "true" onClick={() => Parent(resource.id)}>
                    Select
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