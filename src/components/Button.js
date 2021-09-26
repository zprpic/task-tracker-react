import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

export const Button = (props) => {
  const { id } = props;
  return (
    <button>
      <Link to={`/tasks/${id}`}>
        <EditIcon />
      </Link>
    </button>
  );
};
