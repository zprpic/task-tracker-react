import React from "react";
import { useState, useEffect } from "react";
import { APIRoutes } from "../config/APIRoutes";
import { TaskList } from "../components/TaskList";
import { Input } from "../components/Input";
import { renderTypeLoader } from "../helpers/renderTypeLoader";
import { connect } from "react-redux";
import { fetchTasks } from "../redux";

const TasksPage = ({ tasksData, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Tasks</h1>
      <Input />

      <TaskList tasks={tasksData} renderType={renderTypeLoader.renderList()} />
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
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
