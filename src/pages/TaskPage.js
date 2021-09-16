import React from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Task } from "../components/Task";
import { useState, useEffect } from "react";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TaskPage = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();

  useFetch(APIRoutes.route, id);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>
      {/*       {loading ? (
        "Loading data..."
      ) : (
        <Task task={task} renderType={renderTypeLoader.renderSingle()} />
      )} */}
    </div>
  );
};

export default TaskPage;
