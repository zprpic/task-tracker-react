import axios from "axios";
import { APIRoutes } from "../../config/APIRoutes";
import { convertArrayToObjectList } from "../../helpers/convertArrayToObjectList";
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASK_BY_ID,
  DELETE_TASK_BY_ID_REQUEST,
  DELETE_TASK_BY_ID_SUCCESS,
  DELETE_TASK_BY_ID_FAILURE,
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

export const fetchTaskById = (id) => {
  return {
    type: FETCH_TASK_BY_ID,
    payload: id,
  };
};

export const deleteTaskByIdRequest = (id) => {
  return {
    type: DELETE_TASK_BY_ID_REQUEST,
    payload: id,
  };
};

export const deleteTaskByIdSuccess = (success) => {
  return {
    type: DELETE_TASK_BY_ID_SUCCESS,
    payload: success,
  };
};

export const deleteTaskByIdFailure = (error) => {
  return {
    type: DELETE_TASK_BY_ID_SUCCESS,
    payload: error,
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksRequest());
    axios
      .get(APIRoutes.getTasks())
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(convertArrayToObjectList(tasks)));
      })
      .catch((error) => {
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const deleteTaskById = (id) => {
  return (dispatch) => {
    dispatch(deleteTaskByIdRequest(id));
    axios
      .delete(APIRoutes.deleteTask(id))
      .then((response) => {
        const taskDeleted = response.data;
        dispatch(deleteTaskByIdSuccess(taskDeleted));
      })
      .catch((error) => {
        dispatch(deleteTaskByIdFailure(error.message));
      });
  };
};
