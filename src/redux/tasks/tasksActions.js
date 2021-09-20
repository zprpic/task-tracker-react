import axios from "axios";
import { APIRoutes } from "../../config/APIRoutes";
import { convertArrayToObjectList } from "../../helpers/convertArrayToObjectList";
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASK_BY_ID,
} from "./tasksTypes";

export const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

export const fetchTaskById = (task) => {
  return {
    type: FETCH_TASK_BY_ID,
    payload: task,
  };
};

export const fetchTasks = (url) => {
  return (dispatch) => {
    dispatch(fetchTasksRequest());
    axios
      .get(url)
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(convertArrayToObjectList(tasks)));
      })
      .catch((error) => {
        dispatch(fetchTasksFailure(error.message));
      });
  };
};
