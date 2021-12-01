// Assignment Page vs Assignments
// assignment page: the page for the individual assignment
// assignments: all assignments including shared
import React, { Fragment, useEffect, useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { colors } from "../../styles";
import { getAssignment } from "../../redux/actions/assignmentActions";

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
  ReturnLink,
  ResourceContainer
} from "./AssignmentPage.elements";

import {
  FaAngleLeft,
  FaPencilAlt,
  FaComments,
  FaShare,
  FaTrashAlt,
  FaArrowLeft,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  DeleteAssignmentForm,
  EditAssignmentForm,
  Loader,
  ResourceCard
} from "../../components/index";

const AssignmentPage = ({ match }) => {
  const {
    params: { userID, assignmentID },
  } = match;
  const mutable = true;
  const { user } = useSelector((state) => state.userDetail);

  //const setShowSubmitAssignmentModal = props.setShowSubmitAssignmentModal;
  
  const { Resources} = user;
  const { secondary } = colors;
  const statusBarSteps = document.getElementsByClassName("RSPBstep");
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
 

  //fixes styling issue for status bar
  for (let i = 0; i < statusBarSteps.length; i++) {
    if (statusBarSteps[i].style.left === "0%") {
      statusBarSteps[i].style.left = "10%";
    }
    if (statusBarSteps[i].style.left === "100%") {
      statusBarSteps[i].style.left = "90%";
    }
  }
  // redux
  const dispatch = useDispatch();
  const { resources, title, description, opendate, duedate, closedate } = useSelector(
    (state) => state.assignmentPageDetail
  );
  // need to change opendate, duedate, and closedate into date objects because state returns the dates as strings
  // even though opendate, duedate, and closedate are stored as Date objects in the database
  const openDateObj = new Date(opendate);
  const dueDateObj = new Date(duedate);
  const closeDateObj = new Date(closedate);

  console.log("id " + assignmentID);

  useEffect(() => {
    try {
      dispatch(getAssignment(match.params.assignmentID));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [match.params.assignmentID, dispatch]);

  return (
    <Fragment>
      {showDeleteModal && (
        <Modal setShowModal={setShowDeleteModal}>
          <DeleteAssignmentForm
            setShowModal={setShowDeleteModal}
            assignmentID={assignmentID}
          />
        </Modal>
      )}
      {showEditModal && (
        <Modal setShowModal={setShowEditModal}>
          <EditAssignmentForm
            setShowModal={setShowEditModal}
            assignmentID={assignmentID}
          />
        </Modal>
      )}

      <AssignmentCardContainer>
        {loading ? (
          <Loader />
        ) : (
          <AssignmentCardContent>
            <TitleContainer>
              <ReturnLink to={`/user/${userID}/assignments`}>
                <FaAngleLeft />
              </ReturnLink>

              <h1> {title}</h1>
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
                  <p>
                    {openDateObj.getMonth() +
                      "/" +
                      openDateObj.getDate() +
                      "/" +
                      openDateObj.getFullYear()}
                  </p>
                  <p>
                    {dueDateObj.getMonth() +
                      "/" +
                      dueDateObj.getDate() +
                      "/" +
                      dueDateObj.getFullYear()}
                  </p>
                  <p>
                    {closeDateObj.getMonth() +
                      "/" +
                      closeDateObj.getDate() +
                      "/" +
                      closeDateObj.getFullYear()}
                  </p>
                  <p>Not Graded</p>
                </DatesContainerAnswers>
              </DatesContainer>

              <DescriptionContainer>
                <p>{description}</p>
              </DescriptionContainer>

              

              <ActionContainer>
                <FaComments />
                {mutable && (
                  <Fragment>
                    <FaPencilAlt onClick={() => setShowEditModal(true)} />

                    <FaShare />
                    <FaTrashAlt onClick={() => setShowDeleteModal(true)} />
                  </Fragment>
                )}
              </ActionContainer>
            </DatesDescriptionActionContainer>
            {mutable ? (
              <OwnerResourceContainer>
                {/*<ViewResourceButton> View Resource </ViewResourceButton> */}
              </OwnerResourceContainer>
            ) : (
              <ReceiverResourceContainer>
                <ViewResourceButton> View Resource </ViewResourceButton>
                <SubmitButton> Submit Assignment </SubmitButton>
              </ReceiverResourceContainer>
            )}


                <ResourceContainer>
                {Resources.map((resource) => !!resource.AssignmentId && (resource.AssignmentId === assignmentID) &&(
                  <ResourceCard
                    key={resource.AssignmentId}
                    {...resource}
                    showButtons
                    showType
                    showDates
                    showDescription
                  />
                ))}
              </ResourceContainer>
          </AssignmentCardContent>
        )}
      </AssignmentCardContainer>
    </Fragment>
  );
};

export default AssignmentPage;
// delete works, but doesnt send user to dashboard after delete
