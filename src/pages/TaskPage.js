import React from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Task } from "../components/Task";
import { useState, useEffect } from "react";
import { renderTypeLoader } from "../helpers/renderTypeLoader";
import { connect } from "react-redux";
import { fetchTaskById } from "../redux";

const TaskPage = ({ fetchTaskById, taskData }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchTaskById(id);
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>

      <Task task={taskData} renderType={renderTypeLoader.renderSingle()} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    taskData: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskById: () => dispatch(fetchTaskById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
