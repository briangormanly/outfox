import styled from 'styled-components';
import { colors } from '../../styles';

const { secondary, white } = colors;

const { primary, primaryLight } = colors;

export const Description = styled.div`font-size: 1.4rem;`;

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


export const ResourceContainer1 = styled.div`


background-color: ${white};
border: 1px solid ${white};

svg {
    font-size: 2rem;
    color: rgba(229, 229, 229, 0.5);
    align-items: center;
  }

  
`;

export const LessonsContainer = styled.div`
  
button {
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    flexDirection: row;
    justify-content: space-around;
    
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
  
    
`;
