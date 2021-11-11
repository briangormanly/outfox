import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ResourceCard } from '../index';
import { AssignmentCard } from '../index';
import parse from 'html-react-parser';
import {
    LessonsContainer,
    Description, 
    ResourceContainer1,
    
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
   

    const { user } = useSelector((state) => state.userDetail);
    const { Resources } = user;
    const { Assignments } = user;
    const style = { color: "black"};
    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);
    
    

    return (
        <React.Fragment>
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
                {Resources.map((resource) => (
                    <ResourceContainer1>
                <ResourceCard 
                    key={resource.LessonID}
                    {...resource}
                    
                    showDescription
                    
                />
                <br />
                </ResourceContainer1>
                    ))}

                <br />
                <br />

                <h1 style = {style }>Assignments:</h1>
                {Assignments.map((assignment) => (
                
                <AssignmentCard
                  key={assignment.id}
                  id={assignment.id}
                  title={assignment.title}
                  description={assignment.description}
                />
              ))}

        </React.Fragment>
    );
};

export default LessonCard;
