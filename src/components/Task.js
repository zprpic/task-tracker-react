import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { renderTypeLoader } from "../helpers/renderTypeLoader";
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
          <Button
            id={task._id}
            renderType={renderTypeLoader.renderEditButton()}
          />
          <Button
            id={task._id}
            renderType={renderTypeLoader.renderDeletebutton()}
          />
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
            <button type="submit">Save</button>
          </form>
        </>
      )}
    </li>
  );
};
