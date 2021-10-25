import React, { useReducer, Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import ReactDOM, { render } from "react-dom"
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addLesson } from '../../redux/actions/userActions';
import FormInput from '../Form-Input/Form-Input';

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


import { Modal, PlusForm} from "../index";

import { FaPlus} from "react-icons/fa";

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

const CreateLessonForm = ({ creatorid, LessonId, setShowModal }) => {

    const [ value, setValue ] = useState('');
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { title, description, link} = state;

    const { user: { id } } = useSelector((state) => state.userDetail);

    const plus = { color: "white", fontSize: "2.5em"};
    const stylequill = { background: "white", height: "35em", width: "54em", minheight: "100% ", overflowy:"auto"};
    const stylemodal = { float: "left"};
    //const [showModal, setShowModal] = useState(false);
    
    const lessonarray = [];
    
    const [ showPlusModal, setShowPlusModal ] = useState(false);

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
            newObject = { ...state, mutable: true, creatorid: creatorid };
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
                <ReactQuill theme="snow" value={value} onChange={setValue} style={stylequill}/>  
                </QuillContainer>
                <br />
                
                <PlusContainer>
                <button onClick={() => setShowPlusModal(true)}>
                    
                <ModalsContent>
                <span><FaPlus style={plus} /></span> 
                </ModalsContent>

                </button>
                </PlusContainer>

                <br />
                <br />
                <br />
                
                <CreateContainer>
                <ActionButton edit fullWidth type="submit" value= "Upload" >
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