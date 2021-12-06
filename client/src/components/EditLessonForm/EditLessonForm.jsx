import React, { useReducer, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ActionButton } from '../../styles';

import lessonService from '../../services/lesson';
import { editUserLesson } from '../../redux/actions/userActions';
import { QuillContainer, 
        BodyContainer, 
        HeaderText, 
        FormContainer, 
        CreateContainer,
        PlusContainer,
         } from './EditLessonForm.elements';
import { Modal, PlusForm} from "../index";

import { FaPlus} from "react-icons/fa";


const initialState = {
    type        : '',
    title       : '',
    description : '',
    link        : ''
};

function reducer(state, { field, value }) {
    return {
        ...state,
        [field] : value
    };
}

const EditLessonForm = ({ creatorid, lessonID, setShowModal}) => {

    const [ value, setValue ] = useState('');
    const [ state, dispatch ] = useReducer(reducer, initialState);
    //const { title, description} = state;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const plus = { color: "white", fontSize: "2.5em"};
    const [ showPlusModal, setShowPlusModal ] = useState(false);
    
    const { user: { id } } = useSelector((state) => state.userDetail);

    const stylequill = { background: "white", height: "35em", width: "54em", minheight: "100% ", overflowy:"auto"};
   
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
            
                setTitle(title);
                setDescription(description);
                
            };

            fetchData();
        },
        [ lessonID ]
    );

    const handleInput = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
    
      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!title) {
            console.log('Please Enter All Fields');
            return;
        }

        const newLessonObject = {
            title: title,
            description: description,
            
        };

        console.log(lessonID);
        console.log(id);

        try {

            
            storeDispatch(editUserLesson(lessonID, newLessonObject));

            setShowModal(false);


        } catch (error) {
            console.log("1 " + error.toString());
        }
    };


    return (

        <React.Fragment>
        {showPlusModal && (
            <Modal small setShowModal={setShowPlusModal}>
            <PlusForm lessonID={lessonID} creatorid = {creatorid} setShowModal={setShowPlusModal} />
            </Modal>
        )}

        <BodyContainer>
        <Fragment>
        <br />
            <HeaderText>Edit Lesson</HeaderText>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                <FormInput
                    type="text"
                    name="title"
                    label="title"
                    value={title}
                    onChange={handleTitleChange}
                />

                <FormInput
                    type="text"
                    name="description"
                    //label="Description"
                    value={value}
                    onChange={handleDescriptionChange}
                />

                </FormContainer>
            
                
   
                <br />
                <QuillContainer> 
                <ReactQuill theme="snow" value={description} onChange={setValue} style={stylequill} />  
                </QuillContainer>
                <br />
                <br />

                <br />
 
                <CreateContainer>
                <ActionButton  edit fullWidth type="submit">
                    Edit Lesson
                </ActionButton>
                </CreateContainer>
            
                </form>

                <PlusContainer>
                <button onClick={() => setShowPlusModal(true)}>
                <span><FaPlus style={plus} /></span> 
                </button>
                </PlusContainer>
                </Fragment>
        </BodyContainer>
        </React.Fragment>
    );
};

export default EditLessonForm;