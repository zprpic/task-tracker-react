import React from "react";
import useFetch from "use-http";
import { APIRoutes } from "../config/APIRoutes";
import { Button } from "./Button";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.task;
  const { deleteTask } = props;

  return (
    <li>
      <span className={isCompleted ? "taskNameCompleted" : "taskName"}>
        {name}
      </span>
      <Button id={_id} />
      <button onClick={() => deleteTask(_id)}>delete</button>
      {_id}
    </li>
  );
};
