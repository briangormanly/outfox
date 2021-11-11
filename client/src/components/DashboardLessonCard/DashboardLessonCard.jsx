import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { Card } from "./DashboardLessonCard.elements";


const DashboardLessonCard = ({ title}) => {
  const history = useHistory();
  const params = useParams();

  const handleClick = () => {
    history.push(`/user/${params.id}/lessons`);
  };

  return (
    <Card>
      <h2>{title}</h2>
      <button onClick={handleClick}>View Lesson</button>
    </Card>
  );
};

export default DashboardLessonCard;