import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux";

export const Input = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => dispatch(createTask(e, task))}>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
    </form>
  );
};
