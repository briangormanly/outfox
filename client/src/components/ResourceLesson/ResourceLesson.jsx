import React, { Fragment, useState } from "react";
import {addoldLessonResource} from "../../redux/actions/lessonsActions";

import {
  ResourceContainer,
  InnerContainer,
  Content,
  VerticalLine,
  ResourceContainer1,
  ButtonContainer
} from "./ResourceLesson.elements";

import {
  createLessonAction
} from '../../redux/actions/userActions';

import lessonService from '../../services/lesson.js';

import { useDispatch, useSelector } from 'react-redux';
import { FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm} from "../index";


const ResourceLesson = ({lessonId, setShowModal}) => {

  const { user } = useSelector((state) => state.userDetail);
  const [ showAddModal, setShowAddModal ] = useState(false);
  const { user: { id } } = useSelector((state) => state.userDetail);
  const { Resources} = user;
  const style = { color: "black"};
  const style1 = { margin : "auto"};
  
  
  //redux
  const dispatch = useDispatch();

  const addoldLessonResource = async (resourceID) => {
    const response = await lessonService.getLessonData(id);

    console.log(resourceID);

    const { Resources, description, title} = response;
  
    const newObject = {
      Resources,
      description,
      title,
    };
    console.log(newObject);

    dispatch(createLessonAction(newObject, Resources));
  };
  

  return (
    <Fragment>
      {showAddModal && (
        <Modal large setShowModal={setShowAddModal}>
          <AddResourceForm lessonId={lessonId} setShowModal={setShowAddModal} />
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
                    <button primary = "true" onClick={() => addoldLessonResource(resource.id)}>
                    Select
                    </button>
                    </ButtonContainer>
                    <br />

                    
                    </ResourceContainer1> 
                    
                     
               ))
               }
                  <br />
                  <button onClick={() => setShowModal(false)}>          
                    Add
                    </button>
                    

                
            {Resources.length < 1 && (
              <ResourceContainer>
              
              <FaClipboard style = {style1}/>
              <p> You do not have any Resources</p>
              <button onClick={() => setShowAddModal(true)}>
                Create 
              </button>
              </ResourceContainer>
            )}
            </Content>
            </InnerContainer>

    </Fragment>
  );
  
};

export default ResourceLesson;