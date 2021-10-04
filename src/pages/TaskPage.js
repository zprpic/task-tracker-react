import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { Task } from "../components/Task";
import { useState, useEffect } from "react";
import { renderTypeLoader } from "../helpers/renderTypeLoader";
import { fetchTaskById } from "../redux";

const TaskPage = ({ fetchTaskById, tasksData }) => {
  const { id } = useParams();

  let taskData = tasksData[`${id}`];

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Task</h1>

      <Task task={taskData} renderType={renderTypeLoader.renderSingle()} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasksData: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskById: (id) => dispatch(fetchTaskById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
