import styled from "styled-components";

import { colors } from "../../styles";

const { white, primary } = colors;

const ChildContainer = styled.div`
  padding: 2rem;
  border-radius: 25px;
  background-color: ${white};
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 30rem;
  grid-template-rows: 46rem 1fr;
  grid-template-areas:
    "groups groups friends" "resources resources friends"
    "sharedW sharedW friends" "lessons lessons friends"
    "sharedR sharedR sharedR" "sharedG sharedG sharedG";
`;

export const GroupContainer = styled(ChildContainer)`
  grid-area: groups;
`;
export const FriendContainer = styled(ChildContainer)`
  grid-area: friends;
`;
export const ResourceContainer = styled(ChildContainer)`
  grid-area: resources;
`;

export const CourseContainer = styled(ChildContainer)`
  grid-area: courses;
`;

export const SharedResourceContainer = styled(ChildContainer)`
  grid-area: sharedR;
`;

export const SharedGroupContainer = styled(ChildContainer)`
  grid-area: sharedG;
`;

const ChildContainerDropdown = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background: none;

  .Collapsible {
    border-radius: 5px;
    background-color: ${primary};
    color: ${white};
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 20px;
      }

      svg {
        font-size: 25px;
      }
    }
  }
`;

export const SharedWithMeContainer = styled(ChildContainerDropdown)`
  grid-area: sharedW;
`;

export const LessonsContainer = styled(ChildContainerDropdown)`
  grid-area: lessons;
`;
