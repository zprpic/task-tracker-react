import React from "react";

export const Task = (props) => {
  const { _id, name, isCompleted } = props.item;
  return (
    <li>
      {_id}
      {name}
      {isCompleted}
    </li>
  );
};
