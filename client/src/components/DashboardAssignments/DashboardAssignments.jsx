import React, { Fragment, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//import Collapsible from "react-collapsible";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { CreateAssignmentForm, Modal, AssignmentCard } from "../index";

import {
  AssignmentsContainer,
  Header,
  CardContainer,
  ButtonContainer,
} from "./DashboardAssignments.elements";

const DashboardAssignments = (dashboardPaginate) => {
  const [showModal, setShowModal] = useState(false);

  const {
    user: { Assignments },
  } = useSelector((state) => state.userDetail);

  const history = useHistory();
  const params = useParams();

  const scrollRef = useRef(null);

  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const handleViewAll = () => {
    dashboardPaginate({ type: "assignments" });
    history.push(`/user/${params.id}/assignments`);
  };
  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateAssignmentForm setShowModal={setShowModal} />
        </Modal>
      )}
      {/*      <Collapsible
        trigger={
          <React.Fragment>
            <h1>My Assignments</h1>
            <FaAngleDown />
          </React.Fragment>
        }
      >
        <p> You do not have any assignments</p>
        <button onClick={() => setShowModal(true)}> Create Assignment </button>
      </Collapsible>*/}
      <AssignmentsContainer>
        <Header>
          <h1>My Assignments</h1>
          <ButtonContainer>
            <button onClick={() => setShowModal(true)}>
              <span>Create Assignment</span> <FaPlus />
            </button>
            <button onClick={handleViewAll}>
              <span>View All</span>
              <FaArrowRight />
            </button>
          </ButtonContainer>
        </Header>
        <CardContainer ref={scrollRef} onWheel={onWheel}>
          {Assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              id={assignment.id}
              name={assignment.assignmentname}
              description={assignment.assignmentdescription}
            />
          ))}
        </CardContainer>
      </AssignmentsContainer>
    </Fragment>
  );
};

export default DashboardAssignments;
