import React, {useReducer, Fragment, useState, useEffect } from "react";
import {addExistingLessonResource, editLesson} from "../../redux/actions/lessonsActions";
import {createLessonAction} from "../../redux/actions/userActions";

import {
  ResourceContainer,
  InnerContainer,
  Content,
  VerticalLine,
  ResourceContainer1,
  ButtonContainer
} from "./ResourceLesson.elements";


import lessonService from '../../services/lesson.js';

import { useDispatch, useSelector } from 'react-redux';
import { FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm} from "../index";

const initialState = {
  title: "",
  description: "",
  link: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}


const ResourceLesson = ({creatorid, lessonID, setShowModal}) => {

  console.log("Resource: " + lessonID);
  console.log("Resource: " + creatorid);

  const { user } = useSelector((state) => state.userDetail);
  const [ showAddModal, setShowAddModal ] = useState(false);
  const { user: { id } } = useSelector((state) => state.userDetail);
  const { Resources} = user;
  const style = { color: "black"};
  const style1 = { margin : "auto"};
  
  const [ state, dispatch ] = useReducer(reducer, initialState);
	const { type, title, description, link } = state;

  //redux
  const storeDispatch = useDispatch();

 

  const addLessonResource = async (resourceID) => {

    const response = await lessonService.getResourceData(resourceID);
		const { type, title, description, link } = response;

    let newObject = { ...response };

    console.log(resourceID);
    console.log(lessonID);

    newObject = { ...response, mutable: true, creatorid: creatorid, LessonId: lessonID };

    {Resources.map((resource) => !resource.LessonId && (resource.id == resourceID) &&(
      
      
      resource.LessonId = lessonID,
      storeDispatch(addExistingLessonResource(resourceID, newObject))

    ))}

  };
  

  return (
    <Fragment>
      {showAddModal && (
        <Modal large setShowModal={setShowAddModal}>
          <AddResourceForm lessonID={lessonID} creatorid = {creatorid} setShowModal={setShowAddModal} />
        </Modal>
      )}
      
          <h1>My Resources</h1>
          
          <InnerContainer>
            <Content>

                    <button onClick={() => setShowAddModal(true)}>
                    Create 
                    </button>
                    <br />

              {Resources.map((resource) => (
                
                    <ResourceContainer1>
                    <h1 style = {style} >{resource.title}</h1>
                       
                    <ButtonContainer>
                    <button primary = "true" onClick={() => addLessonResource(resource.id)}>
                    Select
                    </button>
                    </ButtonContainer>
                    <br />
                    </ResourceContainer1>

                ))}
               
                    <br />
                    <button onClick={() => setShowModal(false)}>          
                    Add
                    </button>
                    

                {Resources.length < 1 && (
                  <ResourceContainer>
                  
                  <FaClipboard style = {style1}/>
                  <p> You do not have any Resources</p>
                  <button onClick={() => setShowAddModal(true)}>
                    Create Resource
                  </button>
                  </ResourceContainer>
                )}
                </Content>
                </InnerContainer>

    </Fragment>
  );
  
};

export default ResourceLesson;
