import React, { useReducer, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ActionButton } from '../../styles';

import lessonService from '../../services/lesson';
import { editUserLesson } from '../../redux/actions/userActions';
import { QuillContainer, BodyContainer, HeaderText, FormContainer, CreateContainer } from './EditLessonForm.elements';
import lesson from '../../services/lesson';


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

const EditLessonForm = ({ lessonID, setShowModal }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { title, description} = state;

    const [ value, setValue ] = useState('');
    const stylequill = { background: "white", height: "35em", width: "54em", overflowy:"auto"};

    const params = useParams();
    console.log(params);
    console.log(params.lessonID);

    // redux
    const storeDispatch = useDispatch();

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await lessonService.getLessonData(lessonID);
                const {title, description} = response;
                dispatch({ field: 'title', value: title });
                dispatch({ field: 'description', value: value });
            };

            fetchData();
        },
        [ lessonID ]
    );

    const handleInput = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            console.log('Please Enter All Fields');
            return;
        }

        let newObject = { ...state };

        try {
            
            storeDispatch(editUserLesson(lessonID, newObject));
            setShowModal(false);

        } catch (error) {
            console.log('An Error Occurred');
        }
    };

    return (

        <BodyContainer>
        <Fragment>
        <HeaderText>Edit Lesson</HeaderText>
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
                    value={description}
                    onChange={handleInput}
                />
                </FormContainer>
            </form> 
                
                
                <QuillContainer>
                <ReactQuill theme="snow" setConents = {lesson} onChange={setValue} style={stylequill} />  
                </QuillContainer>

                <br />
                <br />
                <br />

                <CreateContainer>
                <ActionButton edit fullWidth type="submit">
                    Update Lesson
                </ActionButton>
                </CreateContainer>
            
        </Fragment>
        </BodyContainer>
    );
};

export default EditLessonForm;