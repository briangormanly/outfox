import styled from "styled-components";

import { colors } from "../../styles";

const { white, primary } = colors;

export const TopNavContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: ${white};
    border: 1px solid ${primary};
    color: ${primary};
    font-size: 2rem;
    border-radius: 50%;
    margin-left: 2rem;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${primary};
      color: ${white};
    }

    input {
      border: 1px solid #8b0101;
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      cursor: pointer;
      color: transparent;
      display: block;
      font-size: 1.6rem;
      outline: none;
      background: #fff
        url(https://raw.githubusercontent.com/briangormanly/outfox/98d4bc96e454c8245cb8f4a15f4fcf68e11a1fc0/client/src/components/UserTopNav/red-search-icon.svg)
        no-repeat 1px;
      background-size: 20px 20px;
      background-position: center;
      
      &:focus {
      margin-right: 35rem;
      width: 40rem;
      border-radius: 50px;
      color: black;
      padding-left: 32px;
      background-position: 95%;
      
      &:hover{
        background: #fff
        url(https://raw.githubusercontent.com/briangormanly/outfox/98d4bc96e454c8245cb8f4a15f4fcf68e11a1fc0/client/src/components/UserTopNav/red-search-icon.svg)
        no-repeat 1px;
        background-size: 20px 20px;
        background-position: 95%;
      }
    }
      
      &:hover {
      background: ${primary}
        url(https://raw.githubusercontent.com/briangormanly/outfox/98d4bc96e454c8245cb8f4a15f4fcf68e11a1fc0/client/src/components/UserTopNav/white-search-icon.svg)
        no-repeat 1px;
        background-size: 20px 20px;
        background-position: center;
    }
    
    }
`;
