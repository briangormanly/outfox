import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserAssignment } from "../../redux/actions/userActions";
import FormInput from "../Form-Input/Form-Input";

import { ActionButton } from "../../styles";

import assignmentService from "../../services/assignments";
import { FaAngleLeft } from "react-icons/fa";

import { FaLayerGroup } from "react-icons/fa";
import { AddResourceForm, ResourceCard } from "../index";

import {
  EditAssignmentContainer,
  Page1Container,
  DatesContainer,
  GradeContainer,
  StatusContainer,
  AddResourceContainer,
  Page2Container,
  TitleContainer,
  Page3Container,
  NoResourcesContainer,
  SelectResourceContainer,
  VerticalLine
} from "./EditAssignmentForm.elements";

const EditAssignmentForm = ({ assignmentID, setShowModal, userID }) => {

  console.log("ID: " + userID);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [openDateMonth, setOpenDateMonth] = useState();
  const [openDateDay, setOpenDateDay] = useState();
  const [openDateYear, setOpenDateYear] = useState();

 

  const [dueDateMonth, setDueDateMonth] = useState();
  const [dueDateDay, setDueDateDay] = useState();
  const [dueDateYear, setDueDateYear] = useState();

  const [closeDateMonth, setCloseDateMonth] = useState();
  const [closeDateDay, setCloseDateDay] = useState();
  const [closeDateYear, setCloseDateYear] = useState();

  const [grade, setGrade] = useState("");

  // redux
  const storeDispatch = useDispatch();

  const { user } = useSelector((state) => state.userDetail);
  const { id } = user;
  const { Resources} = user;

  useEffect(() => {
    const fetchData = async () => {
      const response = await assignmentService.getAssignmentData(assignmentID);
      const { title, description, opendate, duedate, closedate } = response;

      // need to change opendate, duedate, and closedate into date objects because state returns the dates as strings
      // even though opendate, duedate, and closedate are stored as Date objects in the database
      const openDateObj = new Date(opendate);
      const dueDateObj = new Date(duedate);
      const closeDateObj = new Date(closedate);

      setTitle(title);
      setDescription(description);

      setOpenDateDay(openDateObj.getDate());
      setOpenDateMonth(openDateObj.getMonth());
      setOpenDateYear(openDateObj.getFullYear());

      setDueDateDay(dueDateObj.getDate());
      setDueDateMonth(dueDateObj.getMonth());
      setDueDateYear(dueDateObj.getFullYear());

      setCloseDateDay(closeDateObj.getDate());
      setCloseDateMonth(closeDateObj.getMonth());
      setCloseDateYear(closeDateObj.getFullYear());
    };

    fetchData();
  }, [assignmentID]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    };

    try {
      storeDispatch(editUserAssignment(assignmentID, newAssignmentObject));
    } catch (error) {
      console.log("An Error Occurred during edit assignment");
    }

    setTitle("");
    setDescription("");

    setShowModal(false);
  };

  const togglePagesOneTwo = () => {
    let page1 = document.getElementById("edit-assignment-page1");
    page1.classList.toggle("is-active");

    let page2 = document.getElementById("edit-assignment-page2");
    page2.classList.toggle("is-active");
  };

  const togglePagesOneThree = () => {
    let page1 = document.getElementById("edit-assignment-page1");
    page1.classList.toggle("is-active");

    let page3 = document.getElementById("edit-assignment-page3");
    page3.classList.toggle("is-active");
  };

  const togglePagesTwoThree = () => {
    let page2 = document.getElementById("edit-assignment-page2");
    page2.classList.toggle("is-active");

    let page3 = document.getElementById("edit-assignment-page3");
    page3.classList.toggle("is-active");
  };
  const currentYear = parseInt(new Date().getFullYear().toString());
  return (
    <EditAssignmentContainer>
      <Page1Container assignmentID = {assignmentID} userID = {userID} id={"edit-assignment-page1"} className={"is-active"}>
        <h1>Edit Assignment </h1>
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
          <AddResourceContainer>
            <button type="button" onClick={togglePagesOneThree}>
              Add Resource
            </button>
            <p>No resource chosen</p>
          </AddResourceContainer>

          <ActionButton edit fullWidth type="submit">
            Edit Assignment
          </ActionButton>
        </form>
      </Page1Container>
      <Page2Container assignmentID = {assignmentID} userID = {userID} id={"edit-assignment-page2"}>
        <TitleContainer>
          <FaAngleLeft onClick={togglePagesOneTwo} />
          <h1>My Resources</h1>
        </TitleContainer>

        {Resources.length > 0 ? (
          <SelectResourceContainer>
            {Resources.filter((resource, indx) => indx < 5).map((resource) => (
              <ResourceCard showDropdown key={resource.id} {...resource} />
            ))}
            
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
      <Page3Container assignmentID = {assignmentID} userID = {userID} id={"edit-assignment-page3"}>
        <TitleContainer>
          <FaAngleLeft onClick={togglePagesOneThree} />
        </TitleContainer>
        <AddResourceForm
          assignmentID={assignmentID}
          //isWithAssignments
          setShowModal={setShowModal}
          userID = {userID}
        />
      </Page3Container>
    </EditAssignmentContainer>
  );
};
export default EditAssignmentForm;