import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.task;
  const { renderType } = props;

  return (
    <li>
      {renderType === "LIST" && (
        <>
          <span className={isCompleted ? "taskNameCompleted" : "taskName"}>
            {name}
          </span>
          <Button id={_id} />
          <button>
            <DeleteIcon />
          </button>
        </>
      )}

      {renderType === "SINGLE" && (
        <>
          <form>
            <input type="text" />
            <br />
            <label>completed?</label>
            <input type="checkbox" />
            <br />
            <input type="hidden" value={_id} />
            <button>Save</button>
          </form>
        </>
      )}
    </li>
  );
};
