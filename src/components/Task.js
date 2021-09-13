import React from "react";
import { Button } from "./Button";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.task;
  const { renderType, deleteTask } = props;

  return (
    <li>
      {renderType === "LIST" && (
        <>
          <span className={isCompleted ? "taskNameCompleted" : "taskName"}>
            {name}
          </span>
          <Button id={_id} />
          <button onClick={() => deleteTask(_id)}>
            <DeleteIcon />
          </button>
        </>
      )}

      {renderType === "SINGLE" && (
        <>
          <input type="text" value={name} />
          <button>Save</button>
        </>
      )}
    </li>
  );
};
