import React, {useState} from 'react';
import {BodyContainer} from './PlusForm.elements';
import {AddContainer} from './PlusForm.elements';
import {ButtonsContainer} from './PlusForm.elements';

import { Modal, ResourceLesson, AssignmentLesson} from "../index";

import {
    HeaderText,
} from './PlusForm.elements';

import { ActionButton } from '../../styles';



const PlusForm = ({creatorid, lessonID, setShowModal}) => {

    console.log("Plus: " + lessonID);
    console.log("Plus: " + creatorid);
    
    const [ showAssignmentModal, setShowAssignmentModal ] = useState(false);
    const [ showResourceModal, setShowResourceModal ] = useState(false);
   
    //console.log("plus   " + lessonId);
    
    return (
        <React.Fragment>

        {showResourceModal && (
            <Modal large setShowModal={setShowResourceModal} >
            <ResourceLesson lessonID={lessonID} creatorid = {creatorid} setShowModal={setShowResourceModal} />
            </Modal>
        )}

        {showAssignmentModal && (
            <Modal small setShowModal={setShowAssignmentModal} >
            <AssignmentLesson lessonID={lessonID} creatorid = {creatorid} setShowModal={setShowAssignmentModal} />
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