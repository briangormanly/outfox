import React from "react";
import {
  AssignmentContainer,
  TitleContainer,
  InnerContainer,
  Content,
} from "./Assignments.elements";

import { FaClipboard } from "react-icons/fa";

const Assignments = () => {
  return (
    <AssignmentContainer>
      <TitleContainer>
        <h1>My Assignments</h1>
        <InnerContainer>
          <Content>
            <FaClipboard />
            <p> You do not have any assignments</p>
            <button> Create Assignment </button>
          </Content>
        </InnerContainer>
      </TitleContainer>

      <TitleContainer>
        <h1>Shared Assignments</h1>
        <InnerContainer>
          <Content>
            <FaClipboard />
            <p> You do not have any shared assignments</p>
          </Content>
        </InnerContainer>
      </TitleContainer>
    </AssignmentContainer>
  );
};

export default Assignments;
