import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { ResourceCard, AddResourceForm, Modal } from "../index";
import {
  ResourceContainer,
  ResourceCardContainer,
  CreateResourceButton,
  InnerContainer,
  Content,
} from "./Resources.elements";

const Resources = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { id, Resources } = user;
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <AddResourceForm creatorid={id} setShowModal={setShowModal} />
        </Modal>
      )}
      <ResourceContainer>
        <CreateResourceButton onClick={() => setShowModal(true)}>
          Create Resource
        </CreateResourceButton>

        <ResourceCardContainer>
          <h1> My Resources</h1>
          <InnerContainer>
            <Content>
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
            </Content>
          </InnerContainer>
        </ResourceCardContainer>
      </ResourceContainer>
    </Fragment>
  );
};

export default Resources;
