import React from "react";
import { useState, useEffect } from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TasksPage = () => {
  const {
    loading,
    error,
    data: tasks,
    fetchRequest: getTasks,
  } = useFetch(APIRoutes.getTasks(), {}, false);

  useEffect(() => {
    getTasks();
  }, []);

  const { fetchRequest: createTask } = useFetch(
    APIRoutes.createTask(),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    false
  );

  useEffect(() => {
    createTask({ body: JSON.stringify(task) });
  }, []);

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
