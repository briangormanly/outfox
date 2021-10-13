import React from "react";
import {
  LessonsContainer,
  TitleContainer,
  InnerContainer,
  Content,
  VerticalLine,
} from "./Lessons.elements";

import { FaClipboard } from "react-icons/fa";

const Lessons = () => {
  return (
    <LessonsContainer>
      <button> Create Lesson</button>
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

export default Lessons;