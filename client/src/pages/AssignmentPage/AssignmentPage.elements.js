import styled from "styled-components";

import { colors, Link } from "../../styles";

const { white, primary, secondary, black } = colors;

export const AssignmentCardContainer = styled.div`
  #start {
    background: yellow;
  }
  margin: 3rem 5rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid ${primary};
  border-radius: 5px;
  background-color: #fff;

  svg {
    font-size: 25px;
  }
`;

export const ResourceContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  /*  */
`;

export const AssignmentCardContent = styled.div`
  position: relative;
  min-height: 15rem;
  min-width: 60rem;
  -webkit-flex: 1 0 0;
  -ms-flex: 1 0 0;
  flex: 1 0 0;
  margin: 0 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 0;
  background-color: ${white};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  svg {
    color: ${primary};
  }

  h1 {
    text-align: center;
    width: 100%;
  }
`;

export const StatusBarContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;

  .RSPBprogressBar {
    width: 100%;
    height: 20px;

    span {
      color: white;
      font-size: 1.2rem;
    }
  }
`;

export const DatesDescriptionActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9rem;
  margin-bottom: 3rem;
`;

export const DescriptionContainer = styled.div`
  p {
    margin-right: 15rem;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatesContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-right: 3rem;
    margin-bottom: 3rem;
  }
`;

export const DatesContainerAnswers = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 3rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    font-size: 25px;
    margin-bottom: 3rem;
    color: ${black};
    &:hover {
      color: ${secondary};
      cursor: pointer;
    }
  }
`;

export const OwnerResourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  align-self: flex-end;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.7rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  color: ${white};
`;

export const ViewResourceButton = styled(Button)`
  background-color: #757575;
  border: 1px solid #757575;

  &:hover {
    color: ${white};
    background-color: #989595;
    border: 1px solid #989595;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${secondary};
  border: 1px solid ${secondary};

  &:hover {
    color: ${secondary};
    background-color: ${white};
    border: 1px solid ${secondary};
  }
`;
export const ReceiverResourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReturnLink = styled(Link)`
  /*color: ${secondary};
  font-size: 2rem;
  display: flex;
  align-items: center;
  align-self: flex-start;

  span {
    display: block;
    margin-left: 1rem;
  }
  */
`;
