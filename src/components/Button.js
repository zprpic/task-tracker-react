import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { deleteTaskById } from "../redux";
import { useDispatch } from "react-redux";

export const Button = (props) => {
  const dispatch = useDispatch();
  const { id, renderType } = props;
  return (
    <button>
      {renderType === "EDIT" && (
        <Link to={`/tasks/${id}`}>
          <EditIcon />
        </Link>
      )}
      {renderType === "DELETE" && (
        <DeleteIcon onClick={() => dispatch(deleteTaskById(id))} />
      )}
    </button>
  );
};
