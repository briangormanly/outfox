import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LessonCard } from "../index";
import { Link } from "../../styles";

import {
  LessonContainer,
  CardContainer,
  NoLessonsContainer,
} from "./DashboardLessons.elements";

const DashboardLessons = (dashboardPaginate) => {
  const {
    user: { Lessons },
  } = useSelector((state) => state.userDetail);

  const scrollRef = useRef(null);

  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const locationParams = useParams();
  const userURL = `/user/${locationParams.id}`;
  return (
    <LessonContainer>
      {Lessons.length > 0 ? (
        <CardContainer ref={scrollRef} onWheel={onWheel}>
          {Lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} showDescription />
          ))}
        </CardContainer>
      ) : (
        <NoLessonsContainer>
          <p> You do not have any lessons</p>
          <button>
            <Link to={`${userURL}/lessons`}> Create Lesson</Link>
          </button>
        </NoLessonsContainer>
      )}
    </LessonContainer>
  );
};

export default DashboardLessons;
