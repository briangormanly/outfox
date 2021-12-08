import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {
  DashboardGroups,
  DashboardFriends,
  DashboardResources,
  DashboardAssignments,
  DashboardLessons,
  FavoriteResource,
  FavoriteGroups,
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
  FavoriteGroupContainer,
  FavoriteResourceContainer,
} from "./Dashboard.elements";
import axFactoryService from "../../services/axFactory";
import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";

const Dashboard = ({ dashboardPaginate }) => {

  const params = useParams();
  
  const [sending, setSending] = useState(true);


  

    const sendTrigger = async() =>{
      let ax = axFactoryService.genAx();
      const rr = ax.get("/triggerCache?userid="+ params.id );
    }

    useEffect(
      () => {
        if(sending){
          sendTrigger();
          setSending(false);
        }
  
  
  
      },
      [sending ]
    );
  
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
          <DashboardLessons dashboardPaginate={dashboardPaginate} />
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
          {/* <DashboardSharedGroups /> */}
          {/* <DashboardSharedResources /> */}
        </Collapsible>
      </SharedWithMeContainer>

      <FavoriteResourceContainer>
        <Collapsible
          trigger={
            <React.Fragment>
              <h1>Favorite Resources</h1>
              <FaAngleDown />
            </React.Fragment>
          }
        >
          <FavoriteResource dashboardPaginate={dashboardPaginate} />
        </Collapsible>
      </FavoriteResourceContainer>

      <FavoriteGroupContainer>
        <Collapsible
          trigger={
            <React.Fragment>
              <h1>Favorite Groups</h1>
              <FaAngleDown />
            </React.Fragment>
          }
        >
          <FavoriteGroups dashboardPaginate={dashboardPaginate} />
        </Collapsible>
      </FavoriteGroupContainer>
      
    </DashboardContainer>
  );
};

export default Dashboard;
