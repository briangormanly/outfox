import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { Card } from "./AssignmentCard.elements";

/*import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

import { colors } from "../../styles";

import {
    AssignmentCardContainer,
    AssignmentCardContent,
    TitleContainer,
    StatusBarContainer,
    OwnerResourceContainer,
    ReceiverResourceContainer,
    DatesDescriptionActionContainer,
    DatesContainer,
    DatesContainerQuestions,
    DatesContainerAnswers,
    DescriptionContainer,
    ActionContainer,
    ViewResourceButton,
    SubmitButton,
} from "./AssignmentCard.elements";

import {
    FaAngleLeft,
    FaPencilAlt,
    FaComments,
    FaShare,
    FaTrashAlt,
} from "react-icons/fa";*/

/*const AssignmentCard = (props) => {
    const isOwner = props.isOwner;
    const setShowSubmitAssignmentModal = props.setShowSubmitAssignmentModal;

    const { secondary } = colors;
    const statusBarSteps = document.getElementsByClassName("RSPBstep");

    //fixes styling issue for status bar
    for (let i = 0; i < statusBarSteps.length; i++) {
        if (statusBarSteps[i].style.left === "0%") {
            statusBarSteps[i].style.left = "10%";
        }
        if (statusBarSteps[i].style.left === "100%") {
            statusBarSteps[i].style.left = "90%";
        }
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
                        <FaComments />
                        {isOwner && (
                            <Fragment>
                                <FaPencilAlt />

                                <FaShare />
                                <FaTrashAlt />
                            </Fragment>
                        )}
                    </ActionContainer>
                </DatesDescriptionActionContainer>
                {isOwner ? (
                    <OwnerResourceContainer>
                        <ViewResourceButton> View Resource </ViewResourceButton>
                    </OwnerResourceContainer>
                ) : (
                    <ReceiverResourceContainer>
                        <ViewResourceButton> View Resource </ViewResourceButton>
                        <SubmitButton onClick={() => setShowSubmitAssignmentModal(true)}>
                            {" "}
                            Submit Assignment{" "}
                        </SubmitButton>
                    </ReceiverResourceContainer>
                )}
            </AssignmentCardContent>
        </AssignmentCardContainer>
    );
};*/

const AssignmentCard = ({ title, description, id }) => {
  const history = useHistory();
  const params = useParams();

  const handleClick = () => {
    history.push(`/user/${params.id}/assignments/${id}`);
  };

  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>View Assignment</button>
    </Card>
  );
};

export default AssignmentCard;
