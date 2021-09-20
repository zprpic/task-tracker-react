import React from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Task } from "../components/Task";
import { useState, useEffect } from "react";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TaskPage = () => {
  const { id } = useParams();

  /*   const {
    loading,
    error,
    data: task,
    fetchRequest: getTask,
  } = useFetch(APIRoutes.getTask(id), {}, false);

  useEffect(() => {
    getTask(id);
  }, []); */

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>
      {/*       {loading && "Loading data..."}
      {!loading && !error && task && (
        <Task task={task} renderType={renderTypeLoader.renderSingle()} />
      )} */}
    </div>
  );
};

export default TaskPage;
