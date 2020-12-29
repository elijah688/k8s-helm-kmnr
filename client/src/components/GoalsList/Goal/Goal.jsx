import React, { useState } from "react";
import { Card } from "react-bootstrap";
import GoalsForm from "../../GoalsForm/index";
import StandardBody from "./StandardBody";
import "./Goal.css";
import { setTheme } from "../../../utils/themes";

const theme = `${setTheme()}-goal`;

const Goal = ({ id, title, content }) => {
  const [editing, setEditing] = useState(false);

  return (
    <Card
      className={theme}
      style={{
        width: "18rem",
        marginTop: "20px",
      }}
    >
      {editing ? (
        <GoalsForm
          id={id}
          title={title}
          content={content}
          editing={editing}
          setEditing={setEditing}
        ></GoalsForm>
      ) : (
        <StandardBody
          id={id}
          title={title}
          content={content}
          setEditing={setEditing}
        ></StandardBody>
      )}
    </Card>
  );
};

export default Goal;
