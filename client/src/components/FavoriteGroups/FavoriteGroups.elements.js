import styled from "styled-components";

import { colors } from "../../styles";

const { secondary, white, primary, primaryLight } = colors;

export const GroupsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 35rem;

  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  button {
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    margin-left: 1rem;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: ${secondary};
    border: none;
    border-radius: 5px;
    color: ${white};

    &:hover {
      color: ${secondary};
      background-color: ${white};
      border: 1px solid ${secondary};
    }

    span {
      display: inline-block;
      margin-right: 1rem;
      min-width: 5rem;
    }
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  padding: 5rem;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${primary};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${primaryLight};
  }
 
`;


export const RemFavBtn = styled.div`
button{
  background-color: blue!important;
}
`
export const NoGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
