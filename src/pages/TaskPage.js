import React from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Task } from "../components/Task";

export const TaskPage = () => {
  const { id } = useParams();
  const {
    isLoadingData,
    errorLoadingData,
    data: task,
  } = useFetch(APIRoutes.getTask(id));

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>
      {isLoadingData ? "Loading data..." : <Task task={task} />}
    </div>
  );
};

export default TaskPage;
