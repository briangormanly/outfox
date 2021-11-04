import styled, { css } from 'styled-components';
import { ReactComponent as FolderSVG } from '../../assets/empty-folder.svg';
import { colors } from '../../styles';

const { primary, secondary, mediumGrey, white } = colors;



export const Description = styled.div`font-size: 1.4rem;`;

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

