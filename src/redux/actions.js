import * as actions from "./actionTypes";

export const fetchTasks = async () => {
  return () => {
    const response = fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };
};
