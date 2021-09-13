import React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { APIRoutes } from "../config/APIRoutes";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const { get, post, del, response, loading, error } = useFetch(
    APIRoutes.route
  );

  const loadTasks = async () => {
    const tasks = await get("/tasks");
    if (response.ok) setTasks(tasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (task) => {
    const newTask = await post("/tasks", { name: task });
    if (response.ok) setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await del("/tasks/" + id);
    if (response.ok) console("? XD");
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      <Input createTask={createTask} />
      {loading ? (
        <h3>Loading data...</h3>
      ) : (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      )}
    </div>
  );
};

export default TasksPage;
