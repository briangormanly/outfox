import React from "react";
import { useSelector } from "react-redux";

import {
  ResourcesContainer,
  ResourceList,
  NoResourcesContainer,
} from "./DashboardResources.elements";

import { ResourceCard } from "../index";
import { Link } from "../../styles";
import { useParams } from "react-router-dom";

function DashboardResources({ dashboardPaginate }) {
  const { user } = useSelector((state) => state.userDetail);
  const { Resources } = user;
  const locationParams = useParams();
  const userURL = `/user/${locationParams.id}`;

  return (
    <ResourcesContainer>
      {Resources.length > 0 ? (
        <ResourceList>
          {Resources.filter((resource, indx) => indx < 5).map((resource) => (
            <ResourceCard small showSVG key={resource.id} {...resource} />
          ))}
        </ResourceList>
      ) : (
        <NoResourcesContainer>
          <p> You do not have any resources</p>
          <button>
            <Link to={`${userURL}/resources`}> Create Resource</Link>
          </button>
        </NoResourcesContainer>
      )}
    </ResourcesContainer>
  );
}

export default DashboardResources;
