import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { GoalsContext } from "../../../context/index";
import "./StandardBody.css";
import { setTheme } from "../../../utils/themes";

const theme = `${setTheme()}-standard-body`;

const StandardBody = ({ id, title, content, setEditing }) => {
  const { removeGoal } = useContext(GoalsContext);
  return (
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={() => setEditing(true)} className="m-1" variant="">
          EDIT
        </Button>
        <Button
          variant=""
          className={`${theme}-delete`}
          onClick={async () => removeGoal(id)}
        >
          DELETE
        </Button>
      </div>
    </Card.Body>
  );
};

export default StandardBody;
