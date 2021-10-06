import styled from "styled-components";
import { colors } from "../../styles";
const { white, primary, secondary } = colors;

export const DropdownContainer = styled.div`
  button {
    background-color: ${primary};
    color: ${white};
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 25px;

      &.active {
        transform: rotate(180deg);
      }
    }
  }
`;

export const ContentContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;

  &.active {
    display: block;
  }
`;
