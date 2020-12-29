import React, { useEffect, useContext } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GoalsContext } from "../../context/index";
import "./GoalsForm.css";
import { setTheme } from "../../utils/themes";

const theme = setTheme();
const GoalsForm = ({ id, title, content, editing, setEditing }) => {
  const { register, handleSubmit, setValue } = useForm();
  const { updateGoal, submitGoal } = useContext(GoalsContext);

  const submit = handleSubmit(async (data) => {
    const apiCall = editing ? updateGoal : submitGoal;
    apiCall(data, id);
    setEditing && setEditing(false);
  });

  useEffect(() => {
    setValue("title", title);
    setValue("content", content);
  });

  return (
    <Card className={theme} style={{ width: "18rem" }}>
      <Card.Body>
        <Form onSubmit={submit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Goal:</Form.Label>
            <Form.Control
              ref={register}
              name="title"
              type="text"
              placeholder="Please enter a goal..."
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={register}
              name="content"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Please enter a description..."
            />
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Button variant="" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default GoalsForm;
