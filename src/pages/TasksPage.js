import React from "react";
import { useState, useEffect } from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TasksPage = () => {
  const [tasks, setTasks] = useState(null);
  const {
    loading,
    error,
    data,
    fetchRequest: getTasks,
  } = useFetch(APIRoutes.getTasks(), {}, false);

  useEffect(() => {
    getTasks();
    setTasks(data);
  }, []);

  /*   const { fetchRequest: createTask } = useFetch(
    APIRoutes.createTask(),
    {
      method: "POST",
      body: JSON.stringify({
        name: task,
      }),
      headers: { "Content-Type": "application/json" },
    },
    false
  ); */

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>

      <Input />

      {loading && <h3>Loading data...</h3>}

      {!loading && error && <h3>error</h3>}

      {!loading && !error && tasks && (
        <TaskList tasks={tasks} renderType={renderTypeLoader.renderList()} />
      )}
    </div>
  );
};

export default TasksPage;
