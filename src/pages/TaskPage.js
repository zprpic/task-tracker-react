import React from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { Task } from "../components/Task";
import { useState, useEffect } from "react";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TaskPage = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();
  const { get, response, loading, error } = useFetch(APIRoutes.route);

  const loadTask = async (id) => {
    const initialTask = await get("/tasks/" + id);
    if (response.ok) setTask(initialTask);
  };

  useEffect(() => {
    loadTask(id);
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>
      {loading ? (
        "Loading data..."
      ) : (
        <Task task={task} renderType={renderTypeLoader.renderSingle()} />
      )}
    </div>
  );
};

export default TaskPage;
