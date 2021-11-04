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

import { Resourcelesson } from '../index';

import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";
import { CreateLessonForm} from "../index";
import { FaPlus,FaClipboard } from "react-icons/fa";
import {Modal} from "../index";
import { useSelector } from "react-redux";
import lessonService from '../../services/lesson';
import userService from '../../services/users';
import { ResourceCard } from '../index';

import { AssignmentCard } from '../index';



//export function Child({parentToChildid}) {
//   return (
       
//       parentToChildid
        
 //  )
//}

function Lessons({ dashboardPaginate }) {

    const { user } = useSelector((state) => state.userDetail);
    
    const [showModal, setShowModal] = useState(false);
    const { id, Resources } = user;
    
    const {Lessons } = user;
    const { Assignments } = user;
   
    const plus = { color: "white", fontSize: "2.5em"};

    

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


    <LessonsContainer1>

            {Lessons.map((lesson) => (
                
                <React.Fragment>
                <Collapsible
                trigger={
                  <React.Fragment>
                    <h1>{lesson.title}</h1>
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

                <h1>Resources:</h1>
                {Resources.map((resource) => (
                <ResourceCard
                    key={resource.id}
                    {...resource}
                    
                    showDescription
                />
                    ))}

                <br />

                <h1>Assignments:</h1>
                {Assignments.map((assignment) => (
                
                <AssignmentCard
                  key={assignment.id}
                  id={assignment.id}
                  title={assignment.title}
                  description={assignment.description}
                />
              ))}

                </Collapsible>
                <br></br>
                </React.Fragment>
                
                ))}

               
        
    </LessonsContainer1>

    </React.Fragment>
    );
}

export default Lessons;
