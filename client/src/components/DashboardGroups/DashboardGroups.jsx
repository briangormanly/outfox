import React, { Fragment, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { Modal, CreateGroupForm, GroupCard } from "../index";

import { GroupsContainer, CardContainer } from "./DashboardGroups.elements";
import { Link } from "../../styles";
import { useParams } from "react-router-dom";

const DashboardGroups = () => {
  const {
    user: { Groups },
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
  const locationParams = useParams();
  const userURL = `/user/${locationParams.id}`;
  return (
    <GroupsContainer>
      <CardContainer ref={scrollRef} onWheel={onWheel}>
        {Groups.map((group) => (
          <GroupCard
            key={group.id}
            id={group.id}
            name={group.groupname}
            description={group.groupdescription}
          />
        ))}
      </CardContainer>
      <button>
        <Link to={`${userURL}/groups`}> Create Group</Link>{" "}
      </button>
    </GroupsContainer>
  );
};

export default DashboardGroups;
