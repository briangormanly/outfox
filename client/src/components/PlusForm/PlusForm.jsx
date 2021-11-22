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



const PlusForm = ({lessonID, setShowModal}) => {

    console.log(lessonID);
    
    const [ showAssignmentModal, setShowAssignmentModal ] = useState(false);
    const [ showResourceModal, setShowResourceModal ] = useState(false);
   
    //console.log("plus   " + lessonId);
    
    return (
        <React.Fragment>

        {showResourceModal && (
            <Modal large setShowModal={setShowResourceModal} >
            <ResourceLesson lessonID={lessonID} setShowModal={setShowResourceModal} />
            </Modal>
        )}

        {showAssignmentModal && (
            <Modal small setShowModal={setShowAssignmentModal} >
            <AssignmentLesson lessonID={lessonID} setShowModal={setShowAssignmentModal} />
            </Modal>
        )}
       
        <BodyContainer >
            <HeaderText>Add</HeaderText>

            <ButtonsContainer>
            <button  onClick={() => setShowAssignmentModal(true)} >
                <span>Assignment</span> 
            </button>
            </ButtonsContainer>

            <br />
            
            <ButtonsContainer>
            <button  onClick={() => setShowResourceModal(true)} >  
                <span>Resource</span>    
            </button>
            </ButtonsContainer>
            
            <br />
            <br />

           

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