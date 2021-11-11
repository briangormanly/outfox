import styled from "styled-components";

import { colors } from "../../styles";

const { primary, primaryLight } = colors;

export const AssignmentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  padding-bottom: 1rem;

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

export const NoAssignmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
