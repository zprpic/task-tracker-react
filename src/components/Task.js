import React, { useState, useCallback } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { renderTypeLoader } from "../helpers/renderTypeLoader";
import { updateTask } from "../redux";

export const Task = (props) => {
  // dvije komponente ...

  const { renderType } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const [task, setTask] = useState(props.task);

  const handleSubmit = useCallback(
    async (e) => {
      const result = await dispatch(updateTask(e, task));
      if (result) history.push("/tasks");
    },
    [task]
  );

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
            />
            <br />
            <label>completed?</label>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={(e) =>
                setTask({ ...task, isCompleted: e.target.checked })
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
