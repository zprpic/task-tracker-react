import React from "react";
import { useFetch } from "../hooks/useFetch";
import { DB_URL } from "../config/db";
import { TaskList } from "../components/TaskList";

export const TasksPage = () => {
  const { isLoadingData, errorLoadingData, data } = useFetch(DB_URL);
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      {isLoadingData ? <h3>Loading data...</h3> : <TaskList data={data} />}
    </div>
  );
};

export default TasksPage;
