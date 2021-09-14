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
  const { get, patch, response, loading, error } = useFetch(APIRoutes.route);

  const loadTask = async (id) => {
    const initialTask = await get("/tasks/" + id);
    if (response.ok) setTask(initialTask);
  };

  useEffect(() => {
    loadTask(id);
  }, []);

  const updateTask = async (task) => {
    const { task: name, completed: isCompleted, id } = task;
    await patch("/tasks/" + id, {
      name,
      isCompleted,
    });
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>
      {loading ? (
        "Loading data..."
      ) : (
        <Task
          task={task}
          updateTask={updateTask}
          renderType={renderTypeLoader.renderSingle()}
        />
      )}
    </div>
  );
};

export default TaskPage;
