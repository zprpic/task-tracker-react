import React from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item) => {
        return <Task item={item} key={item._id} />;
      })}
    </ul>
  );
};
