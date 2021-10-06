import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { DropdownContainer, ContentContainer } from "./Dropdown.elements";

const handleDropdown = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.classList.toggle("active");

  const arrow = document.getElementById("arrow");
  arrow.classList.toggle("active");
};

const Dropdown = (props) => (
  <DropdownContainer onClick={handleDropdown}>
    <button type="button">
      {props.title}
      <FaAngleDown id={"arrow"} />
    </button>
    <ContentContainer id={"contentContainer"}>{props.content}</ContentContainer>
  </DropdownContainer>
);

export default Dropdown;
