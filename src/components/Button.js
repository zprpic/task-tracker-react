import React from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
  const { id } = props;
  return (
    <button>
      <Link to={`/task/${id}`}>Edit...</Link>
    </button>
  );
};
