import React from "react";
import { useState } from "react";
import { LessonCard } from '../index';

import {
  LessonsContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
  LessonsContainer1,
} from "./Lessons.elements";

import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";
import { CreateLessonForm} from "../index";
import { FaPlus,FaClipboard } from "react-icons/fa";
import {Modal} from "../index";
import { useSelector } from "react-redux";

import { Fragment } from "react";



function Lessons({ dashboardPaginate }) {

    const { user } = useSelector((state) => state.userDetail); 
    const [showModal, setShowModal] = useState(false);
    const { id} = user;
    const {Lessons } = user;
    const [ data , setData ] = useState(0);
    const plus = { color: "white", fontSize: "2.5em"};
   
    

  

    return (
        <Fragment>
        {showModal && (
            <Modal large setShowModal={setShowModal} >
            <CreateLessonForm creatorid={id} setShowModal={setShowModal}/>
            </Modal>
        )}
        
        <LessonsContainer>
        
            <button onClick={() => setShowModal(true)}>
                <span>Create Lesson</span> <FaPlus />
            </button>
        
        <TitleContainer>
            <h1>My Lessons</h1>
            <InnerContainer>
            <Content>
            {Lessons.map((lesson) => (
                
                <LessonsContainer1>
               
            
                <Collapsible
                trigger={
                  <React.Fragment>
                    <h1  >{lesson.title}</h1>
                    <FaAngleDown />
                  </React.Fragment>
                }
                >
                
                
                <LessonCard
                    key={lesson.id}
                    {...lesson}
                    showDescription
                    
                />

                <br />
                <br />

                
                </Collapsible>
                <br></br>
                
                </LessonsContainer1>
                
                ))}

                {Lessons.length < 1 && (
                <LessonsContainer>
                
                <FaClipboard />
                <p> You do not have any lessons</p>
                <button onClick={() => setShowModal(true)}>
                <span>Create Lesson</span> <FaPlus style={plus} />
                </button>
                </LessonsContainer>
                )}
            </Content>
            </InnerContainer>
        </TitleContainer>
    </LessonsContainer>
    </Fragment>

    );
}

export default Lessons;
