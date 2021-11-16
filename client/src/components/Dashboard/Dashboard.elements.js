import styled from "styled-components";

import { colors } from "../../styles";

const { white, primary, secondary } = colors;

const ChildContainer = styled.div`
  padding: 2rem;
  border-radius: 25px;
  background-color: ${white};
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
`;
const ChildContainerDropdown = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background: none;

  .Collapsible {
    border-radius: 5px;
    background-color: ${primary};
    cursor: pointer;
    padding: 3rem;
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
        color: ${white};
      }

      svg {
        font-size: 25px;
        color: ${white};
      }
    }

    .is-open {
      h1 {
        padding-bottom: 2rem;
      }
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .Collapsible__contentOuter {
    height: auto;
    transition: all 400ms linear 0s;
    overflow: hidden;
  }

  .Collapsible__contentInner {
    min-height: 40vh;
    width: 100%;
    border-radius: 5px;
    padding: 2rem;
    background-color: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
    cursor: default;

    p {
      margin-top: 5rem;
    }

    button {
      margin-top: 5rem;
      margin-bottom: 5rem;
      font-family: inherit;
      font-size: 1.6rem;
      padding: 0.7rem 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      background-color: ${secondary};
      border: 1px solid ${secondary};
      border-radius: 5px;
      color: ${white};

      &:hover {
        color: ${secondary};
        background-color: ${white};
        border: 1px solid ${secondary};
      }
    }
  }
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 30rem;

  grid-template-areas:
    "groups groups friends" "resources resources friends"
    "assignments assignments friends" "lessons lessons friends" "sharedW sharedW friends" "favG favG friends" "favR favR friends"
    "sharedR sharedR sharedR" "sharedG sharedG sharedG";
`;

export const GroupContainer = styled(ChildContainerDropdown)`
  grid-area: groups;
`;
export const FriendContainer = styled(ChildContainer)`
  grid-area: friends;
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



export const ResourceContainer = styled(ChildContainerDropdown)`
  grid-area: resources;
`;

export const SharedWithMeContainer = styled(ChildContainerDropdown)`
  grid-area: sharedW;
`;

export const LessonsContainer = styled(ChildContainerDropdown)`
  grid-area: lessons;
`;

export const AssignmentsContainer = styled(ChildContainerDropdown)`
  grid-area: assignments;
`;

export const FavoriteGroupContainer = styled(ChildContainerDropdown)`
grid-area: favG;
`;

export const FavoriteResourceContainer = styled(ChildContainerDropdown)`
grid-area: favR;
`;
