import React, { useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CreateLessonForm, Modal, DashboardLessonCard } from "../index";
import { Link } from "../../styles";

import {
  LessonsContainer,
  NoLessonsContainer,
  CardContainer,
  Header,
  
} from "./DashboardLessons.elements";

const DashboardLessons = (dashboardPaginate) => {
  const locationParams = useParams();
  const userURL = `/user/${locationParams.id}`;

  const [showModal, setShowModal] = useState(false);

  const { user } = useSelector((state) => state.userDetail);
  const {
        user: { Lessons },
  } = useSelector((state) => state.userDetail);
  
  const { id } = user;

  const history = useHistory();
  const params = useParams();

  const scrollRef = useRef(null);

  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  
  return (
    <React.Fragment>
       {showModal && (
            <Modal large setShowModal={setShowModal} >
            <CreateLessonForm creatorid={id} setShowModal={setShowModal}/>
            </Modal>
        )}

        <Header>
          <h1>My Lessons</h1>

 

        </Header>

        <LessonsContainer>
              {Lessons.length > 0 ? (
                <CardContainer ref={scrollRef} onWheel={onWheel}>
                  {Lessons.map((lesson) => (
                    <DashboardLessonCard
                      key={lesson.id}
                      id={lesson.id}
                      title={lesson.title}
                    />
                  ))}
                </CardContainer>
              ) : (
                <NoLessonsContainer>
                  <p> You do not have any Lessons</p>
                  <button>
                  <Link to={`${userURL}/lessons`}> Create Assignment</Link>{" "}
                  </button>
                </NoLessonsContainer>
              )}
            </LessonsContainer>
            </React.Fragment>
          );
        };

export default DashboardLessons;
