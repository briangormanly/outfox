import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CreateAssignmentContainer,
  Page1Container,
  ErrorMessage,
  DatesContainer,
  GradeContainer,
  StatusContainer,
  CreateAssignmentButton,
  Page2Container,
  TitleContainer,
  SelectResourceContainer,
  NoResourcesContainer,
  VerticalLine,
  Page3Container,
} from "./CreateAssignmentForm.elements";

import FormInput from "../Form-Input/Form-Input";
import { addAssignment } from "../../redux/actions/userActions";
import { FaAngleLeft, FaLayerGroup, FaPlusCircle } from "react-icons/fa";
import { ResourceCard, AddResourceForm } from "../index";

const CreateAssignmentForm = ({ lessonID, setShowModal }) => {
  const [title, setTitle] = useState("");
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

  const [errorMessage, setErrorMessage] = useState("");

  const storeDispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetail);
  const { id, Resources } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(lessonID);

    if (
      !title ||
      !description ||
      !openDateMonth ||
      !openDateDay ||
      !openDateYear ||
      !dueDateMonth ||
      !dueDateDay ||
      !dueDateYear ||
      !closeDateMonth ||
      !closeDateDay ||
      !closeDateYear
    ) {
      console.log("Please fill out all required fields");
      setErrorMessage("Please fill out all required fields");
      return;
    }

    const newAssignmentObject = {
      title: title,
      description: description,
      creatorid: id,
      opendate: new Date(
        parseInt(openDateYear),
        parseInt(openDateMonth),
        parseInt(openDateDay)
      ),
      duedate: new Date(
        parseInt(dueDateYear),
        parseInt(dueDateMonth),
        parseInt(dueDateDay)
      ),
      closedate: new Date(
        parseInt(closeDateYear),
        parseInt(closeDateMonth),
        parseInt(closeDateDay)
      ),
      status: "open",
      grade: null,
      mutable: true,
      lessonID : lessonID
    };

    try {
      storeDispatch(addAssignment(newAssignmentObject));
    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setDescription("");

    setShowModal(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
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

  const togglePagesOneTwo = (e) => {
    let page1 = document.getElementById("create-assignment-page1");
    page1.classList.toggle("is-active");

    let page2 = document.getElementById("create-assignment-page2");
    page2.classList.toggle("is-active");
  };

  const togglePagesTwoThree = (e) => {
    let page2 = document.getElementById("create-assignment-page2");
    page2.classList.toggle("is-active");

    let page3 = document.getElementById("create-assignment-page3");
    page3.classList.toggle("is-active");
  };

  const currentYear = parseInt(new Date().getFullYear().toString());

  return (
    <CreateAssignmentContainer>
      <Page1Container id={"create-assignment-page1"} className={"is-active"}>
        <h1>Create Assignment </h1>
        {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="title"
            label="*Title"
            value={title}
            onChange={handleTitleChange}
          />
          <FormInput
            type="text"
            name="description"
            label="*Description"
            value={description}
            onChange={handleDescriptionChange}
          />

          <DatesContainer>
            <p>*Open Date:</p>
            <FormInput
              type="number"
              name="openDateM"
              label="M"
              value={openDateMonth}
              onChange={handleOpenDateMonthChange}
              className={"small"}
              min="0"
            />

            <FormInput
              type="number"
              name="openDateD"
              label="D"
              value={openDateDay}
              onChange={handleOpenDateDayChange}
              className={"small"}
              min="0"
            />
            <FormInput
              type="number"
              name="openDateY"
              label="Y"
              value={openDateYear}
              onChange={handleOpenDateYearChange}
              className={"small"}
              min={currentYear} // new Date().getFullYear()
            />
          </DatesContainer>

          <DatesContainer>
            <p>*Due Date:</p>
            <FormInput
              type="number"
              name="dueDateM"
              label="M"
              value={dueDateMonth}
              onChange={handleDueDateMonthChange}
              className={"small"}
              min="0"
            />

            <FormInput
              type="number"
              name="dueDateD"
              label="D"
              value={dueDateDay}
              onChange={handleDueDateDayChange}
              className={"small"}
              min="0"
            />
            <FormInput
              type="number"
              name="dueDateY"
              label="Y"
              value={dueDateYear}
              onChange={handleDueDateYearChange}
              className={"small"}
              min={currentYear}
            />
          </DatesContainer>

          <DatesContainer>
            <p>*Close Date:</p>
            <FormInput
              type="number"
              name="closeDateM"
              label="M"
              value={closeDateMonth}
              onChange={handleCloseDateMonthChange}
              className={"small"}
              min="0"
            />

            <FormInput
              type="number"
              name="closeDateD"
              label="D"
              value={closeDateDay}
              onChange={handleCloseDateDayChange}
              className={"small"}
              min="0"
            />
            <FormInput
              type="number"
              name="dueDateY"
              label="Y"
              value={closeDateYear}
              onChange={handleCloseDateYearChange}
              className={"small"}
              min={currentYear}
            />
          </DatesContainer>

          <StatusContainer>
            <p>Status:</p>
            <p>Open</p>
          </StatusContainer>

          <GradeContainer>
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
          </GradeContainer>

          <CreateAssignmentButton type="submit">
            Create Assignment
          </CreateAssignmentButton>
        </form>
      </Page1Container>
      <Page2Container id={"create-assignment-page2"}>
        <TitleContainer>
          <FaAngleLeft onClick={togglePagesOneTwo} />
          <h1>My Resources</h1>
        </TitleContainer>
        {Resources.length > 0 ? (
          <SelectResourceContainer>
            {Resources.filter((resource, indx) => indx < 5).map((resource) => (
              <ResourceCard
                isWithAssignmentForm
                key={resource.id}
                {...resource}
              />
            ))}
            <FaPlusCircle onClick={togglePagesTwoThree} />
            <button onClick={togglePagesOneTwo}>Add Resource</button>
          </SelectResourceContainer>
        ) : (
          <NoResourcesContainer>
            <FaLayerGroup />
            <VerticalLine />
            <p> You do not have any resources</p>
            <button onClick={togglePagesTwoThree}>Create Resource</button>
          </NoResourcesContainer>
        )}
      </Page2Container>
      <Page3Container id={"create-assignment-page3"}>
        <TitleContainer>
          <FaAngleLeft onClick={togglePagesTwoThree} />
        </TitleContainer>
        <AddResourceForm isWithAssignments />
      </Page3Container>
    </CreateAssignmentContainer>
  );
};

export default CreateAssignmentForm;