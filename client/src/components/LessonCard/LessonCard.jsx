import React, { useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import { ResourceCard } from '../index';
import { AssignmentCard } from '../index';
import parse from 'html-react-parser';
import {
    LessonsContainer,
    Description, 
    ResourceContainer1,
    CardContainer
} from './LessonCard.elements';


import {Modal, EditLessonForm, DeleteLessonForm} from "../index";



const LessonCard = ({
    id,
    title,
    description,
    creatorid,
    createdAt,
    updatedAt,
    showDescription,
}) => {
   
    console.log("lessoncard: " + id);
    console.log("lessoncard: " + creatorid);
    
    
    
    const { user } = useSelector((state) => state.userDetail);

    const { Resources} = user;

    const { Assignments } = user;
    const style = { color: "black"};
    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);
    
    const scrollRef = useRef(null);

    const onWheel = (e) => {
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;

        container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY,
        });
    };

    return (
        <React.Fragment>
        {showEditModal && (
            <Modal large setShowModal={setShowEditModal}>
            <EditLessonForm setShowModal={setShowEditModal} 
                            lessonID={id} 
                            creatorid = {creatorid}/>
            </Modal>
        )}
        {showDeleteModal && (
            <Modal setShowModal={setShowDeleteModal}>
            <DeleteLessonForm setShowModal={setShowDeleteModal} 
                              lessonID={id} 
                              creatorid = {creatorid}/>
            </Modal>
        )}

       

            <h1 style = {style} >{title}</h1>
            <React.Fragment>
            <LessonsContainer>
                <button edit = "true" onClick={() => setShowEditModal(true)}>
                Edit
                </button>
            
                <button delete = "true" onClick={() => setShowDeleteModal(true)}>
                Delete
                </button>

                <button onClick={() => setShowDeleteModal(true)}>
                Share
                </button>
                </LessonsContainer>
            </React.Fragment>
            
            {showDescription && (
             <Description>
                {parse(description)}
             </Description>
             )}

            <h1 style = {style }>Resources:</h1>
            {Resources.map((resource) => !!resource.LessonId && (resource.LessonId === id) &&(
                <ResourceContainer1>
                <ResourceCard 
                key={resource.LessonId}
                    {...resource}
                    
                    showDescription
                />
                <br />
                </ResourceContainer1>

            ))}



                <br />
                <br />

                <h1 style = {style }>Assignments:</h1>
                
            <CardContainer ref={scrollRef} onWheel={onWheel}>
                {Assignments.map((assignments) => !!assignments.LessonId && (assignments.LessonId === id) &&(
                
                <AssignmentCard
                  key={assignments.LessonId}
                  id={assignments.id}
                  title={assignments.title}
                  description={assignments.description}
                />
                
              ))}
            </CardContainer>

        </React.Fragment>
    );
};

export default LessonCard;