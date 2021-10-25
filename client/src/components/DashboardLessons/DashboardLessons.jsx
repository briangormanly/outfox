import React, { Fragment, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { CreateLessonForm, Modal, LessonCard } from "../index";

import {
  LessonContainer,
  Header,
  CardContainer,
  ButtonContainer,
} from "./DashboardLessons.elements";

const DashboardLessons = (dashboardPaginate) => {
  const [showModal, setShowModal] = useState(false);

  const { user } = useSelector((state) => state.userDetail);
  const {
        user: { Lessons },
  } = useSelector((state) => state.userDetail);
  
  const { id, Resources } = user;

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

  const handleViewAll = () => {
    dashboardPaginate({ type: "lessons" });
    history.push(`/user/${params.id}/lessons`);
  };
  return (
    <React.Fragment>
      {showModal && (
            <Modal large setShowModal={setShowModal} >
            <CreateLessonForm creatorid={id} setShowModal={setShowModal}/>
            </Modal>
        )}
      
      <LessonContainer>

        <Header>
          <h1>My Lessons</h1>

          <ButtonContainer>
            <button onClick={() => setShowModal(true)}>
              <span>Create Lesson</span> <FaPlus />
            </button>

            <button onClick={handleViewAll}>
              <span>View All</span>
              <FaArrowRight />
            </button>
          </ButtonContainer>

        </Header>

        <CardContainer ref={scrollRef} onWheel={onWheel}>
          {Lessons.map((lesson) => (
            <LessonCard
            key={lesson.id}
            {...lesson}
            showDescription
        />
          ))}

        </CardContainer>

      </LessonContainer>
      </React.Fragment>
  );
};

export default DashboardLessons;