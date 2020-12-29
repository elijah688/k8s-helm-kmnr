import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import Goal from "./Goal/index";
import { GoalsContext } from "../../context/index";

const GoalsList = () => {
  const { goals, loading } = useContext(GoalsContext);
  return loading ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    goals.map(({ id, title, content }) => (
      <Goal key={id} id={id} title={title} content={content}></Goal>
    ))
  );
};

export default GoalsList;
