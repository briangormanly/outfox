import React, { useReducer, Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { addUserResource } from '../../redux/actions/userActions';
//import { addGroupResource } from '../../redux/actions/groupPageActions';

//import { addLesson } from '../../redux/actions/userActions';

import FormInput from '../Form-Input/Form-Input';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {BodyContainer} from './CreateLessonForm.elements';
import {QuillContainer} from './CreateLessonForm.elements';
import {PlusContainer} from './CreateLessonForm.elements';
import {CreateContainer} from './CreateLessonForm.elements';
import {FormContainer} from './CreateLessonForm.elements';
import {ModalsContent} from './CreateLessonForm.elements';


import { createGroupAction } from "../../redux/actions/userActions";

import { Modal, PlusForm, ResourceCard } from "../index";

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

const CreateLessonForm = ({ creatorid, GroupId }) => {
    const [ type, setType ] = useState('Text');
    const [ value, setValue ] = useState('');

    const [ state, dispatch ] = useReducer(reducer, initialState);
    //const { title, description, link } = state;

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

        if (!title) {
            console.log('Please Enter All Fields');
            return;
        }

        const formData = new FormData();

        const newLessonObject = {
            lessonname: title,
            lessondescription: description,

            createdby: id,
        };

        try {
            storeDispatch(createGroupAction(newLessonObject));
          } catch (error) {
            console.log(error);
          }

        setShowModal(false);
    };


    const handleInput = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    const handleNameChange = (e) => {
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
                    onChange={handleInput}
                />

                <FormInput
                    type="text"
                    name="lessondescription"
                    label="Description"
                    value={description}
                    onChange={handleInput}
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