import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.task;
  const { renderType, deleteTask, updateTask } = props;

  const [formData, setFormData] = useState({
    task: "",
    completed: null,
    id: null,
  });

  useEffect(() => {
    setFormData({ task: name, completed: isCompleted, id: _id });
  }, [props.task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(formData);
  };

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, task: e.target.value })
              }
              value={formData.task}
            />
            <br />
            <label>completed?</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setFormData({ ...formData, completed: e.target.checked })
              }
              checked={formData.completed}
            />
            <br />
            <input type="hidden" value={_id} />
            <button>Save</button>
          </form>
        </>
      )}
    </li>
  );
};
