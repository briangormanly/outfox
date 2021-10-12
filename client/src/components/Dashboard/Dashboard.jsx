import React from "react";

import {
  DashboardGroups,
  DashboardFriends,
  DashboardResources,
  //DashboardSharedResources,
  //DashboardSharedGroups,
} from "../index";

import {
  DashboardContainer,
  GroupContainer,
  FriendContainer,
  ResourceContainer,
  // SharedResourceContainer,
  //SharedGroupContainer,
  AssignmentsContainer,
  SharedWithMeContainer,
  LessonsContainer,
} from "./Dashboard.elements";

import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";

const Dashboard = ({ dashboardPaginate }) => {
  return (
    <DashboardContainer>
      <GroupContainer>
        <DashboardGroups dashboardPaginate={dashboardPaginate} />
      </GroupContainer>

      <FriendContainer>
        <DashboardFriends />
      </FriendContainer>
      <ResourceContainer>
        <DashboardResources dashboardPaginate={dashboardPaginate} />
      </ResourceContainer>

      {/*            <SharedResourceContainer>
                <DashboardSharedResources />
            </SharedResourceContainer>

            <SharedGroupContainer>
                <DashboardSharedGroups />
            </SharedGroupContainer>*/}

      <AssignmentsContainer>
        <Collapsible
          trigger={
            <React.Fragment>
              <h1>My Assignments</h1>
              <FaAngleDown />
            </React.Fragment>
          }
        >
          <p> You do not have any assignments</p>
          <button> Create Assignment </button>
        </Collapsible>
      </AssignmentsContainer>

      <LessonsContainer>
        <Collapsible
          trigger={
            <React.Fragment>
              <h1>My Lessons</h1>
              <FaAngleDown />
            </React.Fragment>
          }
        >
          <p> You do not have any lessons</p>
          <button> Create Lesson </button>
        </Collapsible>
      </LessonsContainer>

      <SharedWithMeContainer>
        <Collapsible
          trigger={
            <React.Fragment>
              <h1>Shared With Me</h1>
              <FaAngleDown />
            </React.Fragment>
          }
        >
          <p> You do not have anything shared with you</p>
        </Collapsible>
      </SharedWithMeContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
