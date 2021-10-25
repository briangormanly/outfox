import React from "react";

import { useState } from "react";

import { LessonCard } from '../index';

import {
  LessonsContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
  LessonsContainer1,
  ChildContainer,
  ChildContainerDropdown,
  
} from "./Lessons.elements";

import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";

import { CreateLessonForm, ResourceCard, EditLessonForm, DeleteLessonForm } from "../index";
import { FaPlus, FaArrowRight, FaClipboard } from "react-icons/fa";
import {Modal, AddResourceForm , CreateAssignmentForm} from "../index";

import {MContent} from './Lessons.elements';

import { useSelector } from "react-redux";


function Lessons({ dashboardPaginate }) {

    const { user } = useSelector((state) => state.userDetail);
    const {
        user: { Lessons },
      } = useSelector((state) => state.userDetail);
    const [showModal, setShowModal] = useState(false);
    const { id, Resources } = user;

    const plus = { color: "white", fontSize: "2.5em"}

    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);

      
    return (
        <React.Fragment>
        {showModal && (
            <Modal large setShowModal={setShowModal} >
            <CreateLessonForm creatorid={id} setShowModal={setShowModal}/>
            </Modal>
        )}
        {showEditModal && (
            <Modal large setShowModal={setShowEditModal}>
            <EditLessonForm setShowModal={setShowEditModal} lessonID={id} />
            </Modal>
        )}
        {showDeleteModal && (
            <Modal setShowModal={setShowDeleteModal}>
            <DeleteLessonForm setShowModal={setShowDeleteModal} lessonID={id} />
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


    <LessonsContainer1>

            {Lessons.map((lesson) => (
                
                <React.Fragment>
                <Collapsible
                trigger={
                  <React.Fragment>
                    <h1>{lesson.title}</h1>
                    <button edit onClick={() => setShowEditModal(true)}>
                    Edit
                </button>
                <button delete onClick={() => setShowDeleteModal(true)}>
                    Delete
                </button>
                    <FaAngleDown />
                  </React.Fragment>
                }
                >
                
                <LessonCard
                    key={lesson.id}
                    {...lesson}
                    showDescription
                />

                </Collapsible>
                <br></br>
                </React.Fragment>
                
                ))}

               
        
    </LessonsContainer1>

    </React.Fragment>
    );
}

export default Lessons;