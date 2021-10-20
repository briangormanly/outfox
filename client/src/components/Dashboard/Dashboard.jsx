import React from "react";

import {
  DashboardGroups,
  DashboardFriends,
  DashboardResources,
  DashboardAssignments,
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
          <Collapsible
              trigger={
                  <React.Fragment>
                      <h1>My Groups</h1>
                      <FaAngleDown />
                  </React.Fragment>
              }
          >
        <DashboardGroups dashboardPaginate={dashboardPaginate} />
      </Collapsible>
      </GroupContainer>

      <FriendContainer>
        <DashboardFriends />
      </FriendContainer>
      <ResourceContainer>
          <Collapsible
              trigger={
                  <React.Fragment>
                      <h1>My Resources</h1>
                      <FaAngleDown />
                  </React.Fragment>
              }
          >
        <DashboardResources dashboardPaginate={dashboardPaginate} />
          </Collapsible>
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
        <DashboardAssignments dashboardPaginate={dashboardPaginate} />
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
