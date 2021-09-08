import React from "react";
import { Button } from "./Button";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.task;
  return (
    <li>
      <span className={isCompleted ? "taskNameCompleted" : "taskName"}>
        {name}
      </span>
      <Button id={_id} />
      {_id}
    </li>
  );
};
