import styled from "styled-components";

import { colors } from "../../styles";

const { secondary, white, primary, primaryLight } = colors;

export const LessonContainer = styled.div`
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

const ChildContainerDropdown = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background: none;

  .Collapsible {
    border-radius: 5px;
    background-color: ${primary};
    
    padding: 3rem;
    width: 100%;
    border: none;
    
   

    span {
      
      flex-wrap: wrap;
      justify-content: space-between;

      align-items: center;

      h1 {
        font-size: 20px;
        color: ${white};
      }

      svg {
        float: right;
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
    
    

    
  }
`;

const ChildContainer = styled.div`
  padding: 2rem;
  border-radius: 25px;
  background-color: ${white};

`;

export const Description = styled.div`font-size: 1.4rem;`;


export const LessonsContainer1 = styled(ChildContainerDropdown)`
  grid-area: lessons;


`;
