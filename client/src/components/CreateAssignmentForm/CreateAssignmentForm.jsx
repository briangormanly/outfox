import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CreateAssignmentContainer,
  SmallInputContainer,
} from "./CreateAssignmentForm.elements";

import FormInput from "../Form-Input/Form-Input";
import { createGroupAction } from "../../redux/actions/userActions";

const CreateAssignmentForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [openDateMonth, setOpenDateMonth] = useState("");
  const [openDateDay, setOpenDateDay] = useState("");
  const [openDateYear, setOpenDateYear] = useState("");

  const [dueDateMonth, setDueDateMonth] = useState("");
  const [dueDateDay, setDueDateDay] = useState("");
  const [dueDateYear, setDueDateYear] = useState("");

  const [closeDateMonth, setCloseDateMonth] = useState("");
  const [closeDateDay, setCloseDateDay] = useState("");
  const [closeDateYear, setCloseDateYear] = useState("");

  const [grade, setGrade] = useState("");

  const storeDispatch = useDispatch();
  const {
    user: { id },
  } = useSelector((state) => state.userDetail);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      console.log("Please fill out all fields");
      return;
    }

    const newAssignmentObject = {
      assignmentname: name,
      assignmentdescription: description,

      createdby: id,
      datetimeadd: new Date().toLocaleDateString(),
    };

    try {
      storeDispatch(createGroupAction(newAssignmentObject));
    } catch (error) {
      console.log(error);
    }

    setName("");
    setDescription("");

    setShowModal(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOpenDateMonthChange = (e) => {
    setOpenDateMonth(e.target.value);
  };

  const handleOpenDateDayChange = (e) => {
    setOpenDateDay(e.target.value);
  };

  const handleOpenDateYearChange = (e) => {
    setOpenDateYear(e.target.value);
  };

  const handleCloseDateMonthChange = (e) => {
    setCloseDateMonth(e.target.value);
  };

  const handleCloseDateDayChange = (e) => {
    setCloseDateDay(e.target.value);
  };

  const handleCloseDateYearChange = (e) => {
    setCloseDateYear(e.target.value);
  };

  const handleDueDateMonthChange = (e) => {
    setDueDateMonth(e.target.value);
  };

  const handleDueDateDayChange = (e) => {
    setDueDateDay(e.target.value);
  };

  const handleDueDateYearChange = (e) => {
    setDueDateYear(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  return (
    <CreateAssignmentContainer>
      <h1>Create Assignment </h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="assignmentName"
          label="*Title"
          value={name}
          onChange={handleNameChange}
        />
        <FormInput
          type="text"
          name="assignmentDescription"
          label="*Description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <SmallInputContainer>
          <p>Open Date:</p>
          <FormInput
            type="number"
            name="openDateM"
            label="M"
            value={openDateMonth}
            onChange={handleOpenDateMonthChange}
            className={"small"}
          />

          <FormInput
            type="number"
            name="openDateD"
            label="D"
            value={openDateDay}
            onChange={handleOpenDateDayChange}
            className={"small"}
          />
          <FormInput
            type="number"
            name="openDateY"
            label="Y"
            value={openDateYear}
            onChange={handleOpenDateYearChange}
            className={"small"}
          />
        </SmallInputContainer>

        <SmallInputContainer>
          <p>Due Date:</p>
          <FormInput
            type="number"
            name="dueDateM"
            label="M"
            value={dueDateMonth}
            onChange={handleDueDateMonthChange}
            className={"small"}
          />

          <FormInput
            type="number"
            name="dueDateD"
            label="D"
            value={dueDateDay}
            onChange={handleDueDateDayChange}
            className={"small"}
          />
          <FormInput
            type="number"
            name="dueDateY"
            label="Y"
            value={dueDateYear}
            onChange={handleDueDateYearChange}
            className={"small"}
          />
        </SmallInputContainer>

        <SmallInputContainer>
          <p>Close Date:</p>
          <FormInput
            type="number"
            name="closeDateM"
            label="M"
            value={closeDateMonth}
            onChange={handleCloseDateMonthChange}
            className={"small"}
          />

          <FormInput
            type="number"
            name="closeDateD"
            label="D"
            value={closeDateDay}
            onChange={handleCloseDateDayChange}
            className={"small"}
          />
          <FormInput
            type="number"
            name="dueDateY"
            label="Y"
            value={closeDateYear}
            onChange={handleCloseDateYearChange}
            className={"small"}
          />
        </SmallInputContainer>

        <SmallInputContainer>
          <p>Grade:</p>
          <FormInput
            type="text"
            name="grade"
            label=""
            value={grade}
            onChange={handleGradeChange}
            className={"small"}
            disabled={true}
          />
        </SmallInputContainer>

        <button type="submit">Create Assignment</button>
      </form>
    </CreateAssignmentContainer>
  );
};

export default CreateAssignmentForm;
