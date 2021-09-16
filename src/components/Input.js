import React from "react";
import { useState } from "react";

export const Input = (props) => {
  const [task, setTask] = useState("");
  return (
    <form>
      <input type="text" />
    </form>
  );
};
