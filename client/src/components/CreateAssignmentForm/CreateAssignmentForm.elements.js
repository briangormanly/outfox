import styled from "styled-components";

import { colors } from "../../styles";

const { primary, secondary, white, black } = colors;

export const CreateAssignmentContainer = styled.div`
  width: 100%;

  p {
    margin-top: 3rem;
    color: ${white};
    width: 100%;
  }

  button {
    display: inline-block;
    margin-top: 3rem;
    font-size: 1.6rem;
    border: none;
    background-color: ${secondary};
    color: ${white};
    border-radius: 5px;
    cursor: pointer;
    padding: 0.7rem 1rem;

    &:hover {
      color: ${secondary};
      background-color: ${white};
      border: 1px solid ${secondary};
    }
  }
`;

export const Page1Container = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: none;
  &.is-active {
    display: block;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  p {
    width: initial;
    padding-right: 1rem;
  }
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  p {
    color: #965d5c;
  }
`;

export const AddResourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: #757575;
    border: 1px solid #757575;
    font-size: 1rem;
    width: 50%;
    height: 2rem;

    &:hover {
      color: ${white};
      background-color: #989595;
      border: 1px solid #989595;
    }
  }

  p {
    font-size: 1rem;
    width: initial;
  }
`;

export const CreateAssignmentButton = styled.button`
  width: 100%;
`;

export const Page2Container = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: none;
  svg {
    font-size: 25px;
    color: ${white};
  }

  &.is-active {
    display: block;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SelectResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  svg {
    align-self: flex-end;
  }

  button {
    width: 100%;
  }
`;

export const NoResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 10rem;
    color: ${white};
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  button {
    width: 100%;
  }
`;

export const VerticalLine = styled.div`
  border: 2px solid ${primary};
  position: absolute;
  transform: rotate(48deg);
  border-left: 2px solid ${white};
  height: 150px;
`;

export const Page3Container = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: none;
  svg {
    font-size: 25px;
    color: ${white};
  }

  &.is-active {
    display: block;
  }
`;
