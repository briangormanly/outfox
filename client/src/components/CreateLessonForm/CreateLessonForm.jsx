import React, { useReducer, Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { createUserAction } from '../../redux/actions/userActions';



import { addLesson } from '../../redux/actions/userActions';


import FormInput from '../Form-Input/Form-Input';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {BodyContainer, 
        ButtonContainer,
        QuillContainer, 
        ResourceContainer, 
        AssignContainer,
        PlusContainer, 
        PopContainer,
        CreateContainer,
        FormContainer,
        ModalsContent} 
from './CreateLessonForm.elements';


import { Modal, PlusForm, ResourceCard } from "../index";

import { FaPlus} from "react-icons/fa";

import {
    HeaderText,
} from './CreateLessonForm.elements';

import { ActionButton } from '../../styles';
import { Text } from '../ExploreUserCard/ExploreUserCard.elements';
import { name } from 'faker';

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

const CreateLessonForm = ({ creatorid, LessonId }) => {
    const [ type, setType ] = useState('Text');
    const [ value, setValue ] = useState('');
    const [ file, setFile ] = useState('');
    const [ fileName, setFileName ] = useState('');
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const [title, setTitle] =  useState('');
    const [description, setDescription] =  useState('');

    const { user: { id } } = useSelector((state) => state.userDetail);

    const plus = { color: "white", fontSize: "2.5em", float: "right"}
    const stylequill = { background: "white", height: "35em", width: "54em", minheight: "100% ", overflowy:"auto"}

    const [showModal, setShowModal] = useState(false);

    //redux
    const storeDispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            console.log('Please fill out all fields');
            return;
        }


        const newLessonObject = {
            
            description : description,
            creatorid :title,
            mutable: true
           
            
        }

        const formData = new FormData();


        

        try {
            
            storeDispatch(addLesson(newLessonObject));
            setShowModal(false);

        } catch (error) {
            console.log('An Error Occurred');
        }

        setTitle('');
        setDescription('');
        setShowModal(false);

        storeDispatch(createUserAction(newLessonObject));

    };


    const handleInput = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    

    return (

        <React.Fragment>
        {showModal && (
            <Modal small setShowModal={setShowModal} >
            <PlusForm creatorid={id} setShowModal={setShowModal} />
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
                    name="lessonname"
                    label="Title"
                    value={title}
                    onChange={handleTitleChange}
                />

                <FormInput
                    type="text"
                    name="lessondescription"
                    label="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                /> 
                </FormContainer>

                <br />
                <br />
                <br />

                <QuillContainer>
                {type === 'Text' && (
                    <ReactQuill theme="snow" value={value} onChange={setValue} style={stylequill}  />
                    
                )}
                </QuillContainer>
                <br />
                
                <PlusContainer>

                <button onClick={() => setShowModal(true)}>
                <ModalsContent>
                <span><FaPlus style={plus} /></span> 
                </ModalsContent>
                </button>
                
                
                </PlusContainer>

                <br />
                <br />
                <br />
                
                <CreateContainer>
                <ActionButton edit fullWidth type="submit" value="Upload">
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
