import React, { Fragment, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus, FaArrowRight } from "react-icons/fa";

import { Modal, CreateGroupForm, GroupCard } from "../index";

import {
  GroupsContainer,
  Header,
  CardContainer,
  ButtonContainer,
} from "./DashboardGroups.elements";

const DashboardGroups = ({ dashboardPaginate }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    user: { Groups },
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


  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateGroupForm setShowModal={setShowModal} />
        </Modal>
      )}
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
      </GroupsContainer>
    </Fragment>
  );
};

export default DashboardGroups;
