import React from "react";
import { useDispatch } from "react-redux";

import { deleteUserAssignment } from "../../redux/actions/userActions";

import { ActionButton } from "../../styles";

const DeleteAssignmentForm = ({ setShowModal, assignmentID }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(deleteUserAssignment(assignmentID));
      setShowModal(false);
    } catch (error) {
      console.log("An Error Occurred when deleting an assignment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Delete Assignment?</h1>
      <ActionButton delete fullWidth type="submit">
        Delete Assignment
      </ActionButton>
    </form>
  );
};

export default DeleteAssignmentForm;
