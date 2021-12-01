import React, { useReducer, Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addLesson } from '../../redux/actions/userActions';
import FormInput from '../Form-Input/Form-Input';

import {BodyContainer, 
        QuillContainer, 
        CreateContainer,
        FormContainer} 
from './CreateLessonForm.elements';

import lessonService from '../../services/lesson.js';
import { Modal, PlusForm} from "../index";


import {
    HeaderText,
} from './CreateLessonForm.elements';

import { ActionButton } from '../../styles';


const initialState = {
    title       : '',
    description : '',
};

function reducer(state, { field, value }) {
    return {
        ...state,
        [field] : value
    };
}


const CreateLessonForm = ({ creatorid, setShowModal }) => {

    const [ value, setValue ] = useState('');
    
    
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { title, description} = state;
    const {
        user: { Lessons },
    } = useSelector((state) => state.userDetail);
    
    
    
    const { user: { id } } = useSelector((state) => state.userDetail);
    
    const stylequill = { background: "white", height: "35em", width: "54em", minheight: "100% ", overflowy:"auto"};
    const [ showPlusModal, setShowPlusModal ] = useState(false);
    const lessonarray = lessonService.getLessonDataNoId();
    console.log(lessonarray);


    //redux
    const storeDispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if (!title) {
            console.log('Please fill out all fields');
            return;
        }

        const formData = new FormData();

        formData.append('title', title);


        if (value) {
            formData.append('description', value);
        } else {
            formData.append('description', description);
        }

        formData.append('mutable', false);

        let newObject = {};

        if (creatorid) {
            formData.append('creatorid', creatorid);
            
        }

        try {
            
            storeDispatch(addLesson(formData));
            setShowModal(false);
           

        } catch (error) {
            console.log('An Error Occurred');
        }

        setShowModal(false);
    };

    


    const handleInput = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

  
    
    return (

        <React.Fragment>
        {showPlusModal && (
            <Modal small setShowModal={setShowPlusModal}>
            <PlusForm creatorid={id} setShowModal={setShowPlusModal} />
            </Modal>
        )}
        
        <BodyContainer>
        <Fragment>
        <br />
            <HeaderText>Create Lesson</HeaderText>
            
            <form onSubmit={handleSubmit}>
                <FormContainer>
                <FormInput
                    type="text"
                    name="title"
                    label="title"
                    value={title}
                    onChange={handleInput}
                />
    
                <FormInput
                    type="text"
                    name="description"
                    //label="Description"
                    value={value}
                    onChange={handleInput}
                />
                </FormContainer>

                <br />
                <br />
                <br />

                

                <QuillContainer> 
                <ReactQuill theme="snow" value={value} onChange={setValue} style={stylequill} />  
                </QuillContainer>
                <br />
                
                <br />

                
                <CreateContainer>
                <ActionButton fullWidth edit = "true"  type="submit" value= "Upload">
                    Create Lesson
                </ActionButton>
                </CreateContainer>
                
            </form>

            
        </Fragment>
        </BodyContainer>
        </React.Fragment>
    );
};

export default CreateLessonForm;