import React from "react";
import { useState } from "react";

import {
  LessonsContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
  
} from "./ViewLesson.elements";

import { CreateLessonForm} from "../index";
import { FaPlus, FaClipboard } from "react-icons/fa";
import {Modal} from "../index";


import { useSelector } from "react-redux";


const ViewLesson = () => {
    const { user } = useSelector((state) => state.userDetail);
    
    const [showModal, setShowModal] = useState(false);
    const { id} = user;

    const plus = { color: "white", fontSize: "2.5em"}

   

      
    return (
        <React.Fragment>
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
                <VerticalLine />
                <FaClipboard />
                <p> You do not have any lessons</p>
                <button onClick={() => setShowModal(true)}>
                <span>Create Lesson</span> <FaPlus style={plus} />
                </button>
            </Content>
            </InnerContainer>
        </TitleContainer>
    </LessonsContainer>

    </React.Fragment>
    );
}


export default ViewLesson;
