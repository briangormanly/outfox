import styled from "styled-components";

import { colors } from "../../styles";

const { white, primary, secondary } = colors;

export const Position = styled.div`

  position: absolute;
  right: 0%;
  left: 0%;
  top: 40%;
 

  `;

export const LessonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-right: 6rem;
    align-self: flex-end;
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

    span {
      display: inline-block;
      margin-right: 1rem;
      min-width: 5rem;
    }
  }
`;

export const TitleContainer = styled.div`
  min-height: 65vh;
  width: 90%;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  background-color: ${primary};
  border-top: solid ${primary} 10px;
  border-radius: 5px;

  h1 {
    color: ${white};
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding: 3rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  min-height: 55vh;
  width: 100%;
  border-radius: 5px;
  padding: 2rem;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);

  svg {
    font-size: 10rem;
    color: rgba(229, 229, 229, 0.5);
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    margin-top: 0;
    margin-right: 0;
    align-self: center;
  }
`;

export const VerticalLine = styled.div`
  border: 2px solid rgba(229, 229, 229, 0.5);
  position: relative;
  transform: rotate(48deg);
  border-left: 2px solid ${white};
  top: 125px;
  height: 150px;
`;

export const MContent = styled.div`

  position: absolute;
  right: 0%;
  left: 0%;
  top: 0%;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  
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
