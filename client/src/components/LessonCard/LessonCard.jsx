import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import parse from 'html-react-parser';

import Collapsible from "react-collapsible";

import lessonService from '../../services/lesson';
import groupService from '../../services/groups';
import commentService from '../../services/comments';
import userService from '../../services/users';

import { deleteSharedResource } from '../../redux/actions/userActions';

import {

    Description, 
    
} from './LessonCard.elements';

import { ActionButton as Button } from '../../styles';



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
   

    const params = useParams();

    // redux
    const dispatch = useDispatch();


    return (
        <Fragment>
            
              
                    
                        <h2>{title}</h2>
                        {showDescription && (
                            <Description>
                                {parse(description)}
                            </Description>
                        )}


                    
              

           
        </Fragment>
    );
};





export default LessonCard;