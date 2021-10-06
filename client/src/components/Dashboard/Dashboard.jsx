import React from "react";

import {
  DashboardGroups,
  DashboardFriends,
  DashboardResources,
  DashboardSharedResources,
  DashboardSharedGroups,
} from "../index";

import {
  DashboardContainer,
  GroupContainer,
  FriendContainer,
  ResourceContainer,
  SharedResourceContainer,
  SharedGroupContainer,
  SharedWithMeContainer,
} from "./Dashboard.elements";

import Dropdown from "../Dropdown/Dropdown";

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
      <SharedResourceContainer>
        <DashboardSharedResources />
      </SharedResourceContainer>
      <SharedGroupContainer>
        <DashboardSharedGroups />
      </SharedGroupContainer>
      <SharedWithMeContainer>
        <Dropdown title={"Shared With Me"} content={"content"} />
      </SharedWithMeContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
