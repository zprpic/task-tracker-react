import React from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { tasks, renderType } = props;
  return (
    <ul>
      {tasks.map((task) => {
        return <Task task={task} key={task._id} renderType={renderType} />;
      })}
    </ul>
  );
};
