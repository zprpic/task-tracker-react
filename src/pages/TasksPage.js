import React from "react";
import { useFetch } from "../hooks/useFetch";
import { APIRoutes } from "../config/APIRoutes";
import { TaskList } from "../components/TaskList";

export const TasksPage = () => {
  const {
    isLoadingData,
    errorLoadingData,
    data: tasks,
  } = useFetch(APIRoutes.getTasks());
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      {isLoadingData ? <h3>Loading data...</h3> : <TaskList tasks={tasks} />}
    </div>
  );
};

export default TasksPage;
