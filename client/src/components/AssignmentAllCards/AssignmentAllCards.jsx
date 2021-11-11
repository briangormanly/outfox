import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";

import assignmentService from "../../services/assignments.js";

import {
  deleteSharedAssignment,
  addAssignment,
} from "../../redux/actions/userActions";

import { AssignmentCard, ButtonGroup } from "./AssignmentAllCards.elements";

const AssignmentAllCards = (
  id,
  datetimeadd,
  description,
  title,
  shared,
  sharedFrom,
  sharedAssignmentID
) => {
  /*const date = datetimeadd.slice(0, 10);*/
  const history = useHistory();
  // const params = useParams();
  const location = useLocation();
  const params = useParams();

  //redux
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userDetail);

  const handleClick = () => {
    history.push(`${location.pathname}/${id}`);
  };

  const viewSharedAssignment = () => {
    history.push(`/user/${params.id}/explore/${sharedFrom.id}/${id}`);
  };

  const handleRemoveSharedAssignment = () => {
    try {
      dispatch(deleteSharedAssignment(sharedAssignmentID));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToMyAssignments = async () => {
    const response = await assignmentService.getAssignmentData(id);
    // console.log(response);

    const { Resources, description, title } = response;

    const newObject = {
      Resources,
      description,
      title,
      createdby: user.id,
      datetimeadd: new Date().toLocaleDateString(),
    };
    console.log(newObject);

    dispatch(addAssignment(newObject));
  };

  return (
    <AssignmentCard>
      {sharedFrom && (
        <div>Shared By: {`${sharedFrom.firstname} ${sharedFrom.lastname}`}</div>
      )}
      <div>Created: {/*date*/}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ButtonGroup>
        {shared && (
          <button onClick={handleAddToMyAssignments}>
            Add to My Assignments
          </button>
        )}
        {shared && (
          <button onClick={handleRemoveSharedAssignment}>Remove</button>
        )}
        {shared ? (
          <button onClick={viewSharedAssignment}>View Assignment</button>
        ) : (
          <button onClick={handleClick}>View Assignment</button>
        )}
      </ButtonGroup>
    </AssignmentCard>
  );
};

export default AssignmentAllCards;
