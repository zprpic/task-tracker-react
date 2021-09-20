import React from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { tasks, renderType } = props;
  return (
    <ul>
      {Object.keys(tasks).map((key) => {
        return <Task task={tasks[key]} key={key} renderType={renderType} />;
      })}
    </ul>
  );
};
