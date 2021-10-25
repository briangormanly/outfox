import React, { useReducer, Fragment, useState} from 'react';
import {useSelector } from 'react-redux';


import {BodyContainer} from './PlusForm.elements';
import {AddContainer} from './PlusForm.elements';
import {ButtonsContainer} from './PlusForm.elements';
import {PopContainer} from './PlusForm.elements';

import { Modal, ResourceLesson, AssignmentLesson} from "../index";

import {
    HeaderText,
} from './PlusForm.elements';

import { ActionButton } from '../../styles';



const PlusForm = ({ creatorid, GroupId }) => {
    const [ type, setType ] = useState('Text');
    const [ value, setValue ] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { user: { id } } = useSelector((state) => state.userDetail);

    const [ showAssignmentModal, setShowAssignmentModal ] = useState(false);
    const [ showResourceModal, setShowResourceModal ] = useState(false);

    const stylemodal = { height: "100px", width: "100px"};

    return (
        <React.Fragment>

        {showResourceModal && (
            <Modal large setShowModal={setShowResourceModal} >
            <ResourceLesson creatorid={id} setShowModal={setShowResourceModal} />
            </Modal>
        )}

        {showAssignmentModal && (
            <Modal small setShowModal={setShowAssignmentModal} >
            <AssignmentLesson creatorid={id} setShowModal={setShowAssignmentModal} />
            </Modal>
        )}
       
        <BodyContainer >
            <HeaderText>Add</HeaderText>

            <ButtonsContainer>
            <button onClick={() => setShowAssignmentModal(true)}>
                <span>Assignment</span> 
            </button>
            </ButtonsContainer>

            <br />
            
            <ButtonsContainer>
            <button onClick={() => setShowResourceModal(true)}>  
                <span>Resource</span>    
            </button>
            </ButtonsContainer>
            
            <AddContainer>
            <ActionButton edit fullWidth type="submit" value="Upload">
                Add
            </ActionButton>
            </AddContainer>
                
        </BodyContainer>
        </React.Fragment>
    );
};

export default PlusForm;
