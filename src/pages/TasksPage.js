import React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { APIRoutes } from "../config/APIRoutes";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const { get, post, del, response, loading, error } = useFetch(
    APIRoutes.route
  );

  const loadInitialTasks = async () => {
    const initialTasks = await get("/tasks");
    if (response.ok) setTasks(initialTasks);
    console.log("load initial tasks");
  };

  const createTask = async (task) => {
    const newTask = await post("/tasks", { name: task });
    if (response.ok) setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await del("/tasks/" + id);
    if (response.ok)
      setTasks((tasks) => tasks.filter((task) => task._id !== id));
  };

  useEffect(() => {
    loadInitialTasks();
    console.log("use effect triggered");
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      <Input createTask={createTask} />
      {loading ? (
        <h3>Loading data...</h3>
      ) : (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          renderType={renderTypeLoader.renderList()}
        />
      )}
    </div>
  );
};

export default TasksPage;
