import React from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { tasks, renderType, deleteTask } = props;
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task._id}
            renderType={renderType}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
};
