import styled, { css } from "styled-components";
import { ReactComponent as FolderSVG } from "../../assets/empty-folder.svg";
import { colors } from "../../styles";

const { primary, secondary, mediumGrey, white } = colors;

export const FolderIcon = styled(FolderSVG)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-60%, -56%);
  height: 22rem;
  width: 22rem;
  fill: none;
  stroke: ${primary};
  stroke-width: 2;
  pointer-events: none;
`;

export const CardContainer = styled.div`
  position: relative;
  min-height: 15rem;
  /* min-width: 35rem; */
  min-width: 60rem;
  flex: 1 0 0;
  margin: 0px 1rem;
  padding: 1rem;
  margin-bottom: 0rem;
  border: 1px solid ${mediumGrey};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 0;
  background-color: ${white};

  ${(props) =>
    props.small &&
    css`
      min-width: 10rem;
      width: 17rem;
      flex: 0 0 auto;
      padding: 2rem 0;
      border: none;
      min-height: 5rem;
      height: 12rem;
      margin-bottom: .2rem;
    `};

  @media screen and (max-width: 500px) {
    min-width: 20rem;
  }
  button{
      background-color:red ;

  }
`;

export const Dates = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    display: block;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
    margin-left: 1rem;
    text-align: right;
    font-size: 1.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 0 0;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 8rem;
  margin-left: 1rem;
 
  @media screen and (max-width: 500px) {
    flex-direction: row;
    width: 100%;
  }

  button {
    margin-top:10px !important;

    @media screen and (max-width: 500px) {
      padding: 1rem 2rem;
      width: 10rem;
      margin-right: 2rem;
    }
  }
`;

export const Attributes = styled.div`
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: ${primary};
    font-weight: bolder;
    margin-right: 1rem;
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    text-align: left;
    font-size: 1.4rem;
    margin: 0;

    a {
      display: flex;
      align-items: center;

      color: ${secondary};
      span {
        color: ${secondary};
      }
    }
  }

  ${(props) =>
    props.showSVG &&
    css`
      h2 {
        margin-top: 2rem;
        font-size: 1.4rem;
      }
    `};
`;

export const DownloadButton = styled.button`
  color: ${secondary};
  border: none;
  background-color: white;
  font-size: 1.4rem;
  font-weight: bolder;
  display: flex;
  align-items: center;

  span {
    font-family: "Roboto";
    color: ${secondary};
  }
`;

export const Description = styled.div`
  font-size: 1.4rem;
`;

export const ShowCommentButton = styled.button`
  margin-top: .1rem!important;
  /* width: 12rem; */
  padding: 1rem 3rem;
  background-color: #800000 !important;
  border: none;
  color: ${secondary};
  font-size: 1.4rem;
  outline: none;

  svg {
    padding-left: 0.2rem;
  }
`;

export const CommentContent = styled.div`
  /* background-color: pink; */
  margin: 0 auto;
  width: 60rem;
  display: flex;
  flex-direction: column;
`;

export const CommentInput = styled.input`
  width: 80%;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const CommentButton = styled.button`
  width: 20%;
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

export const CommentCardContent = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 0.75rem;

  p {
    font-size: 1.4rem;

    span {
      color: ${primary};
    }
  }
`;

export const AssignmentFormCardContainer = styled.div`
  width: 100%;
  background: ${white};
  border-radius: 5px;
  cursor: pointer;
  padding: 0.7rem 1rem;
  margin-top: 3rem;
  &:hover {
    background: ${secondary};
    color: ${white};
  }
`;
