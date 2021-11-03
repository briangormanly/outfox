import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ResourceList } from "./DashboardResources.elements";

import { ResourceCard } from "../index";
import { Link } from "../../styles";
import { useParams } from "react-router-dom";

function DashboardResources({ dashboardPaginate }) {
  const { user } = useSelector((state) => state.userDetail);
  const { Resources } = user;
  const locationParams = useParams();
  const userURL = `/user/${locationParams.id}`;

  return (
    <ResourceList>
      {Resources.filter((resource, indx) => indx < 5).map((resource) => (
        <ResourceCard small showSVG key={resource.id} {...resource} />
      ))}
      <button>
        <Link to={`${userURL}/resources`}> Create Resource</Link>
      </button>
    </ResourceList>
  );
}

export default DashboardResources;
