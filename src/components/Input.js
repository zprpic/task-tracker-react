import React from "react";
import { useState } from "react";

export const Input = (props) => {
  const { createTask } = props;
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    e.target.reset();
  };
  return (
    <form onSubmit={(e, task) => handleSubmit(e, task)}>
      <input type="text" onChange={handleChange} />
    </form>
  );
};
