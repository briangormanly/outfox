import React, { Fragment, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { CreateAssignmentForm, Modal, AssignmentCard } from "../index";
import {
  AssignmentsContainer,
  CardContainer,
  NoAssignmentsContainer,
} from "./DashboardAssignments.elements";
import { Link } from "../../styles";
import { useParams } from "react-router-dom";

const DashboardAssignments = () => {
  const locationParams = useParams();
  const userURL = `/user/${locationParams.id}`;

  const {
    user: { Assignments },
  } = useSelector((state) => state.userDetail);

  const scrollRef = useRef(null);

  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  return (
    <AssignmentsContainer>
      {Assignments.length > 0 ? (
        <CardContainer ref={scrollRef} onWheel={onWheel}>
          {Assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              id={assignment.id}
              title={assignment.title}
              description={assignment.description}
            />
          ))}
        </CardContainer>
      ) : (
        <NoAssignmentsContainer>
          <p> You do not have any assignments</p>
          <button>
            <Link to={`${userURL}/assignments`}> Create Assignment</Link>{" "}
          </button>
        </NoAssignmentsContainer>
      )}
    </AssignmentsContainer>
  );
};

export default DashboardAssignments;
