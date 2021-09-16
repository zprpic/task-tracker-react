import React from "react";
import { useState, useEffect } from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  const { loading, error, data, fetchRequest } = useFetch(
    APIRoutes.getTasks(),
    {},
    false
  );

  /*   const { fetchRequest: createTask } = useFetch(APIRoutes.getTasks(), {
    method: "POST",
  }); */

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      <Input />
      {loading && <h3>Loading data...</h3>}

      {!loading && !error && (
        <TaskList tasks={tasks} renderType={renderTypeLoader.renderList()} />
      )}
    </div>
  );
};

export default TasksPage;
