import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { deleteTaskById } from "../redux";
import { useDispatch } from "react-redux";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.task;
  const { renderType } = props;
  const dispatch = useDispatch();

  return (
    <li>
      {renderType === "LIST" && props.task && (
        <>
          <span className={isCompleted ? "taskNameCompleted" : "taskName"}>
            {name}
          </span>
          <Button id={_id} />
          <button>
            <DeleteIcon onClick={() => dispatch(deleteTaskById(_id))} />
          </button>
        </>
      )}

      {renderType === "SINGLE" && props.task && (
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
