import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus, FaArrowRight } from "react-icons/fa";

import {
  Header,
  ButtonContainer,
} from "../DashboardGroups/DashboardGroups.elements";
import {
  ResourcesContainer,
  ResourceList,
} from "./DashboardResources.elements";

import { Modal, AddResourceForm, ResourceCard } from "../index";

function DashboardResources({ dashboardPaginate }) {
  const [showModal, setShowModal] = useState(false);

  const { user } = useSelector((state) => state.userDetail);
  const { id, Resources } = user;

  const history = useHistory();
  const params = useParams();

  const handleViewAll = () => {
    dashboardPaginate({ type: "resources" });
    history.push(`/user/${params.id}/resources`);
  };

  return (
    <React.Fragment>
      {showModal && (
        <Modal large setShowModal={setShowModal}>
          <AddResourceForm creatorid={id} setShowModal={setShowModal} />
        </Modal>
      )}
      <Header>

        <ButtonContainer>
          <button onClick={() => setShowModal(true)}>
            <span>Create Resource</span> <FaPlus />
          </button>
          <button onClick={handleViewAll}>
            <span>View All</span>
            <FaArrowRight />
          </button>
        </ButtonContainer>
      </Header>
      <ResourceList>
        {Resources.filter((resource, indx) => indx < 5).map((resource) => (
          <ResourceCard small showSVG key={resource.id} {...resource} />
        ))}
      </ResourceList>
    </React.Fragment>
  );
}

export default DashboardResources;
