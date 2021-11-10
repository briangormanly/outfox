import styled from 'styled-components';
import { colors } from '../../styles';

const { secondary, white } = colors;



export const Description = styled.div`font-size: 1.4rem;`;


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
