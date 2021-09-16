import React from "react";
import { useState, useEffect } from "react";
import { APIRoutes } from "../config/APIRoutes";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";
import { renderTypeLoader } from "../helpers/renderTypeLoader";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      <Input createTask={createTask} />
      {loading ? (
        <h3>Loading data...</h3>
      ) : (
        <TaskList tasks={tasks} renderType={renderTypeLoader.renderList()} />
      )}
    </div>
  );
};

export default TasksPage;
