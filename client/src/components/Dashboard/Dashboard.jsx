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
            <SharedResourceContainer>
                <DashboardSharedResources />
            </SharedResourceContainer>
            <SharedGroupContainer>
                <DashboardSharedGroups />
            </SharedGroupContainer>

            <SharedWithMeContainer>
                <Collapsible
                    trigger={
                        <React.Fragment>
                            <h1>Shared With Me</h1>
                            <FaAngleDown />
                        </React.Fragment>
                    }
                >
                    <p>content</p>
                </Collapsible>
            </SharedWithMeContainer>

            <LessonsContainer>
                <Collapsible
                    trigger={
                        <React.Fragment>
                            <h1>My Lessons</h1>
                            <FaAngleDown />
                        </React.Fragment>
                    }
                >
                    <p>content</p>
                </Collapsible>
            </LessonsContainer>
        </DashboardContainer>
    );
};

export default Dashboard;
