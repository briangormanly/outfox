import React from "react";

import { useState } from "react";


import { LessonCard, Lessons } from '../index';
import { LessonContainer } from './ViewLesson.elements';
import ReactDOM, { render } from "react-dom"

import {
  LessonsContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
  LessonsContainer1,
  ChildContainer,
  ChildContainerDropdown,
  
} from "./ViewLesson.elements";

import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";

import { CreateLessonForm, ResourceCard } from "../index";
import { FaPlus, FaArrowRight, FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm , CreateAssignmentForm} from "../index";

import {MContent} from './ViewLesson.elements';

import { useSelector } from "react-redux";


const ViewLesson = () => {
    const { user } = useSelector((state) => state.userDetail);
    const {
        user: { Lessons },
      } = useSelector((state) => state.userDetail);
    const [showModal, setShowModal] = useState(false);
    const { id, Resources } = user;

    const plus = { color: "white", fontSize: "2.5em"}

   

      
    return (
        <React.Fragment>
        {showModal && (
            <Modal large setShowModal={setShowModal} >
            <CreateLessonForm creatorid={id} setShowModal={setShowModal}/>
            </Modal>
        )}

        <LessonsContainer>
        
            <button onClick={() => setShowModal(true)}>
                <span>Create Lesson</span> <FaPlus />
            </button>
        
        <TitleContainer>
            <h1>My Lessons</h1>
            <InnerContainer>
            <Content>
                <VerticalLine />
                <FaClipboard />
                <p> You do not have any lessons</p>
                <button onClick={() => setShowModal(true)}>
                <span>Create Lesson</span> <FaPlus style={plus} />
                </button>
            </Content>
            </InnerContainer>
        </TitleContainer>
    </LessonsContainer>

    </React.Fragment>
    );
}


export default ViewLesson;