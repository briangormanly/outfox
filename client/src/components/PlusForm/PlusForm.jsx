import React, { useReducer, Fragment, useState} from 'react';
import {useSelector } from 'react-redux';


import {BodyContainer} from './PlusForm.elements';
import {AddContainer} from './PlusForm.elements';
import {ButtonsContainer} from './PlusForm.elements';

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

    return (

        <React.Fragment>

        {showModal && (
            <Modal small setShowModal={setShowModal} >
            <ResourceLesson creatorid={id} setShowModal={setShowModal} />
            </Modal>
        )}
       
        <BodyContainer>
        
       
            <HeaderText>Add</HeaderText>

            
            <ButtonsContainer>
            <button onClick={() => setShowModal(true)}>
                <span>Assignment</span> 
            </button>
            </ButtonsContainer>

            <br />
            
            <ButtonsContainer>
            <button onClick={() => setShowModal(true)}>  
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