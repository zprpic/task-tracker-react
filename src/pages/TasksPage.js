import React from "react";
import { useState, useEffect } from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { getTasks } from "../services/getTasks";
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

  const { fetchRequest: createTask } = useFetch(APIRoutes.getTasks(), {
    method: "POST",
  });

  /*   console.log(loading);
  console.log(error); */

  console.log(data);

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      {/*       <Input createTask={createTask} />
      {loading ? (
        <h3>Loading data...</h3>
      ) : (
        <TaskList tasks={tasks} renderType={renderTypeLoader.renderList()} />
      )} */}
    </div>
  );
};

export default TasksPage;
