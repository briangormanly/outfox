import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import { colors } from "../../styles";

import {
  AssignmentCardContainer,
  AssignmentCardContent,
  TitleContainer,
  StatusBarContainer,
  ViewResourceContainer,
  DatesDescriptionActionContainer,
  DatesContainer,
  DatesContainerQuestions,
  DatesContainerAnswers,
  DescriptionContainer,
  ActionContainer,
} from "./AssignmentCard.elements";

import {
  FaAngleLeft,
  FaPencilAlt,
  FaComments,
  FaShare,
  FaTrashAlt,
} from "react-icons/fa";

const AssignmentCard = () => {
  const { secondary } = colors;
  const RSPBsteps = document.getElementsByClassName("RSPBstep");
  if (RSPBsteps[0]) {
    RSPBsteps[0].style.left = "10%";
  }
  if (RSPBsteps[2]) {
    RSPBsteps[2].style.left = "90%";
  }
  return (
    <AssignmentCardContainer>
      <AssignmentCardContent>
        <TitleContainer>
          <FaAngleLeft />
          <h1> Assignment Name</h1>
        </TitleContainer>
        <StatusBarContainer>
          <ProgressBar
            percent={25}
            filledBackground={secondary}
            unfilledBackground={"#757575"}
          >
            <Step transition="scale" id={"start"}>
              {({ accomplished }) => <span> Open</span>}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => <span> Closed</span>}
            </Step>
            <Step transition="scale" className={"end"}>
              {({ accomplished }) => <span> Returned</span>}
            </Step>
          </ProgressBar>
        </StatusBarContainer>
        <DatesDescriptionActionContainer>
          <DatesContainer>
            <DatesContainerQuestions>
              <p>
                <strong>Open Date:</strong>
              </p>
              <p>
                <strong>Due Date:</strong>
              </p>
              <p>
                <strong>Close Date:</strong>
              </p>
              <p>
                <strong> Grade:</strong>
              </p>
            </DatesContainerQuestions>
            <DatesContainerAnswers>
              <p>9/22/21</p>
              <p>9/22/21</p>
              <p>9/22/21</p>
              <p>Not Graded</p>
            </DatesContainerAnswers>
          </DatesContainer>

          <DescriptionContainer>
            <p>Assignment Description</p>
          </DescriptionContainer>

          <ActionContainer>
            <FaPencilAlt />
            <FaComments />
            <FaShare />
            <FaTrashAlt />
          </ActionContainer>
        </DatesDescriptionActionContainer>
        <ViewResourceContainer>
          <button> View Resource </button>
        </ViewResourceContainer>
      </AssignmentCardContent>
    </AssignmentCardContainer>
  );
};

export default AssignmentCard;
