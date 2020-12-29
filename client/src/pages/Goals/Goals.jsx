import React from "react";
import Layout from "../Layout/index";
import GoalsList from "../../components/GoalsList/index";
import GoalsForm from "../../components/GoalsForm/index";

const Goals = () => (
  <Layout>
    <GoalsForm></GoalsForm>
    <GoalsList></GoalsList>
  </Layout>
);

export default Goals;
