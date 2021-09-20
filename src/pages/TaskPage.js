import React from "react";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Task } from "../components/Task";
import { useState, useEffect } from "react";
import { renderTypeLoader } from "../helpers/renderTypeLoader";
import { connect } from "react-redux";
import { fetchTasks } from "../redux";

const TaskPage = ({ fetchTasks, taskData }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchTasks(id);
    console.log(id);
    console.log(taskData);
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
    fetchTasks: () => dispatch(fetchTasks(APIRoutes.getTask())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
