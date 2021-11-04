import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ResourceCard } from '../index';

import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import parse from 'html-react-parser';

import Collapsible from "react-collapsible";

import lessonService from '../../services/lesson';
import groupService from '../../services/groups';
import commentService from '../../services/comments';
import userService from '../../services/users';

import { deleteSharedResource } from '../../redux/actions/userActions';

//import {i} from' ../../components/ResourceLesson/ResourceLesson';

import {
    LessonsContainer,
    Description, 
    
} from './LessonCard.elements';

import { ActionButton as Button } from '../../styles';
import {Modal, EditLessonForm, DeleteLessonForm} from "../index";



const LessonCard = ({
    id,
    title,
    description,
    creatorid,
    createdAt,
    updatedAt,
    showSVG,
    showDescription,
    type,
    showType,
    showDates
}) => {
   
    const { user } = useSelector((state) => state.userDetail);
    const {
        user: { Lessons },
      } = useSelector((state) => state.userDetail);
    const [showModal, setShowModal] = useState(false);

    const { Resources } = user;
    

    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);

    const params = useParams();

    // redux
    const dispatch = useDispatch();

    return (
        <React.Fragment>
        {showEditModal && (
            <Modal large setShowModal={setShowEditModal}>
            <EditLessonForm setShowModal={setShowEditModal} lessonID={id} />
            </Modal>
        )}
        {showDeleteModal && (
            <Modal setShowModal={setShowDeleteModal}>
            <DeleteLessonForm setShowModal={setShowDeleteModal} lessonID={id} />
            </Modal>
        )}

            <h1>{title}</h1>
            <React.Fragment>
            <LessonsContainer>
                <button edit = "true" onClick={() => setShowEditModal(true)}>
                Edit
                </button>
            
                <button delete = "true" onClick={() => setShowDeleteModal(true)}>
                Delete
                </button>

                <button onClick={() => setShowDeleteModal(true)}>
                Share
                </button>
                </LessonsContainer>
            </React.Fragment>
            
           
            
            {showDescription && (
             <Description>
                {parse(description)}
             </Description>
             )}

            
        </React.Fragment>
    );
};

export default LessonCard;