import React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { APIRoutes } from "../config/APIRoutes";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const { get, post, response, loading, error } = useFetch(APIRoutes.route);

  const loadInitialTasks = async () => {
    const initialTasks = await get("/tasks");
    if (response.ok) setTasks(initialTasks);
  };

  useEffect(() => {
    loadInitialTasks();
  }, []);

  const createTask = async (task) => {
    const newTask = await post("/tasks", { name: task });
    if (response.ok) setTasks([...tasks, newTask]);
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      <Input createTask={createTask} />
      {loading ? <h3>Loading data...</h3> : <TaskList tasks={tasks} />}
    </div>
  );
};

export default TasksPage;
