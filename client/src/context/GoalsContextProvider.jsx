import React, { createContext, useEffect, useState } from "react";
import { getGoals, postGoal, editGoal, deleteGoal } from "../api/api";

const defaultValue = {
  goals: [],
  loading: false,
  setLoading: () => [],
  loadGoals: () => [],
  submitGoal: () => [],
  updateGoal: () => [],
  removeGoal: () => [],
};
export const GoalsContext = createContext(defaultValue);

const GoalsContextProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadGoals = async () => {
    setLoading(true);
    const goals = await getGoals();
    setGoals(goals);
    setLoading(false);
  };

  const submitGoal = async (data) => {
    setLoading(true);
    await postGoal(data);
    await loadGoals();
  };
  const updateGoal = async (data, id) => {
    await editGoal(id, data);
    await loadGoals();
  };
  const removeGoal = async (id) => {
    await deleteGoal(id);
    await loadGoals();
  };
  useEffect(() => {
    loadGoals();
    return () => {};
  }, []);

  return (
    <GoalsContext.Provider
      value={{
        goals,
        loading,
        setLoading,
        loadGoals,
        submitGoal,
        updateGoal,
        removeGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export default GoalsContextProvider;
