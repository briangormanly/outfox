import React from "react";
import {
  LessonsContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
} from "./Lessons.elements";

import { useParams } from 'react-router-dom';

const locationParams = useParams();
const userURL = `/user/${locationParams.id}`;

const MultipleLessons = () => {
  return (
    <LessonsContainer>
      <button onClick={handleClick} > Create Lesson</button>
      <TitleContainer>
        <h1>My Lessons</h1>
        <InnerContainer>
          <Content>
            <VerticalLine />
            <FaClipboard />
            <p> You do not have any lessons</p>
            <button> Create Lesson</button>
          </Content>
        </InnerContainer>
      </TitleContainer>
  </LessonsContainer>
  );
};

export default MultipleLessons;