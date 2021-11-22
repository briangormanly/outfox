import React, { useReducer, Fragment, useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM, { render } from "react-dom"
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addLesson } from '../../redux/actions/userActions';
import FormInput from '../Form-Input/Form-Input';
import { editUserLesson } from '../../redux/actions/userActions';
import { getOldLesson } from '../../redux/actions/lessonsActions';

import {BodyContainer, 
        QuillContainer, 
        PlusContainer, 
        CreateContainer,
        FormContainer,
        ModalsContent,
        SaveContainer,
        RemindContainer} 
from './CreateLessonForm.elements';

import lessonService from '../../services/lesson.js';
import { Modal, PlusForm, ResourceLesson} from "../index";

import { FaPlus} from "react-icons/fa";

import {
    HeaderText,
} from './CreateLessonForm.elements';

import { ActionButton } from '../../styles';
import LessonCard from '../LessonCard/LessonCard';

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
    
    const[data, setData] = useState(0)
    
    const { user: { id } } = useSelector((state) => state.userDetail);
    const plus = { color: "white", fontSize: "2.5em"};
    const stylequill = { background: "white", height: "35em", width: "54em", minheight: "100% ", overflowy:"auto"};
    const [ showPlusModal, setShowPlusModal ] = useState(false);
    const lessonarray = lessonService.getLessonDataNoId();
    console.log(lessonarray);

    {Lessons.map((lesson) => (
        console.log(lesson.id)
    ))}

    //console.log(getOldLesson());


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
