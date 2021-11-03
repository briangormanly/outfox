import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { AddResourceForm, Modal, ResourceCard } from "../index";
import { ResourceContainer } from "./Resources.elements";

const Resources = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { Resources } = user;
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <AddResourceForm setShowModal={setShowModal} />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Create Resource</button>
      <ResourceContainer>
        {Resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            {...resource}
            showButtons
            showType
            showDates
            showDescription
          />
        ))}
      </ResourceContainer>
    </Fragment>
  );
};

export default Resources;
