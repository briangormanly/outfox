import React, {useState} from 'react';
import {useSelector } from 'react-redux';
import {BodyContainer} from './PlusForm.elements';
import {AddContainer} from './PlusForm.elements';
import {ButtonsContainer} from './PlusForm.elements';


import lessonService from '../../services/lesson';

import { Modal, ResourceLesson, AssignmentLesson} from "../index";

import {
    HeaderText,
} from './PlusForm.elements';

import { ActionButton } from '../../styles';



const PlusForm = ({lessonId, setShowModal}) => {

    
    
    const [ showAssignmentModal, setShowAssignmentModal ] = useState(false);
    const [ showResourceModal, setShowResourceModal ] = useState(false);
   
    //console.log("plus   " + lessonId);
    
    return (
        <React.Fragment>

        {showResourceModal && (
            <Modal large setShowModal={setShowResourceModal} >
            <ResourceLesson lessonId={lessonId} setShowModal={setShowResourceModal} />
            </Modal>
        )}

        {showAssignmentModal && (
            <Modal small setShowModal={setShowAssignmentModal} >
            <AssignmentLesson lessonId={lessonId} setShowModal={setShowAssignmentModal} />
            </Modal>
        )}
       
        <BodyContainer >
            <HeaderText>Add</HeaderText>

            <ButtonsContainer>
            <button fullWidth onClick={() => setShowAssignmentModal(true)} disabled={!lessonId}>
                <span>Assignment</span> 
            </button>
            </ButtonsContainer>

            <br />
            
            <ButtonsContainer>
            <button fullWidth onClick={() => setShowResourceModal(true)} disabled={!lessonId} >  
                <span>Resource</span>    
            </button>
            </ButtonsContainer>
            
            <br />
            <br />

            <h1>Remember to hit save before you add an Assignment or Resource</h1>

            <AddContainer>
            <ActionButton fullWidth onClick={() => setShowModal(false)}>
                Add
            </ActionButton>
            </AddContainer>
                
        </BodyContainer>
        </React.Fragment>
    );
};

export default PlusForm;