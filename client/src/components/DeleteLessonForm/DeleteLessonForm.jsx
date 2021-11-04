import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LessonCard } from '../index';

import { deleteUserLesson} from '../../redux/actions/userActions';

import lessonService from '../../services/lesson';

import { useSelector } from "react-redux";

import { ActionButton } from '../../styles';

const DeleteLessonForm = ({ setShowModal, lessonID }) => {
    const dispatch = useDispatch();
   
    const params = useParams();
    
    const { user } = useSelector((state) => state.userDetail);
    const {
        user: { Lessons },
      } = useSelector((state) => state.userDetail);
   
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(deleteUserLesson(lessonID));
            setShowModal(false);

        } catch (error) {
            console.log('An Error Occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Delete Lesson?</h1>
            <ActionButton delete fullWidth type="submit">
                Delete Lesson
            </ActionButton>
        </form>
    );
};

export default DeleteLessonForm;


