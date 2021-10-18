import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import { CreateGroupForm, GroupAllCard, Modal } from "../index";
import {
  GroupContainer,
  Content,
  InnerContainer,
  TitleContainer,
} from "./Groups.elements";

const Groups = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { Groups } = user;

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateGroupForm setShowModal={setShowModal} />
        </Modal>
      )}
      <GroupContainer>
        <button onClick={() => setShowModal(true)}> Create Group </button>
        <TitleContainer>
          <h1>My Groups</h1>
          <InnerContainer>
            <Content>
              {Groups.map((group) => (
                <GroupAllCard key={group.id} {...group} />
              ))}
            </Content>
          </InnerContainer>
        </TitleContainer>
      </GroupContainer>
    </Fragment>
  );
};

export default Groups;
