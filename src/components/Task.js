import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { deleteTaskById } from "../redux";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux";

export const Task = (props) => {
  const { ...task } = props.task;
  const { renderType } = props;
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({ ...task });

  return (
    <li>
      {renderType === "LIST" && props.task && (
        <>
          <span className={task.isCompleted ? "taskNameCompleted" : "taskName"}>
            {task.name}
          </span>
          <Button id={task._id} />
          <button>
            <DeleteIcon onClick={() => dispatch(deleteTaskById(task._id))} />
          </button>
        </>
      )}

      {renderType === "SINGLE" && props.task && (
        <>
          <form onSubmit={(e) => dispatch(updateTask(e, newTask))}>
            <input
              type="text"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
            <br />
            <label>completed?</label>
            <input
              type="checkbox"
              checked={newTask.isCompleted}
              onChange={(e) =>
                setNewTask({ ...newTask, isCompleted: e.target.checked })
              }
            />
            <br />
            <input type="hidden" value={newTask._id} />
            <button>Save</button>
          </form>
        </>
      )}
    </li>
  );
};
