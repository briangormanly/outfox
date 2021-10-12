import React from "react";
import { useSelector } from "react-redux";

import { GroupContainer } from "./Groups.elements";
import { GroupAllCard } from "../index";
import { Content, InnerContainer, TitleContainer } from "./Groups.elements";

const Groups = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { Groups } = user;

  return (
    <GroupContainer>
      <button> Create Group </button>
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
  );
};

export default Groups;
