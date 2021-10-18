import React from "react";

import { Card } from "./AssignmentAllCards.elements";

const AssignmentAllCards = (props) => {
  const name = props.name;
  const description = props.description;

  return (
    <Card>
      <h2>{name}</h2>
      <p>{description}</p>
      <button>View Assignment</button>
    </Card>
  );
};

export default AssignmentAllCards;
