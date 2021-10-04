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
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
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

export const deleteTaskByIdRequest = () => {
  return {
    type: DELETE_TASK_BY_ID_REQUEST,
  };
};

export const deleteTaskByIdSuccess = (id) => {
  return {
    type: DELETE_TASK_BY_ID_SUCCESS,
    payload: id,
  };
};

export const deleteTaskByIdFailure = (error) => {
  return {
    type: DELETE_TASK_BY_ID_FAILURE,
    error: error,
  };
};

export const createTaskRequest = () => {
  return {
    type: CREATE_TASK_REQUEST,
  };
};

export const createTaskSuccess = (task) => {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: task,
  };
};

export const createTaskFailure = (error) => {
  return {
    type: CREATE_TASK_FAILURE,
    error: error,
  };
};

export const updateTaskRequest = () => {
  return {
    type: UPDATE_TASK_REQUEST,
  };
};

export const updateTaskSuccess = (task) => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: task,
  };
};

export const updateTaskFailure = (error) => {
  return {
    type: UPDATE_TASK_FAILURE,
    error: error,
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

export const createTask = (e, task) => {
  e.preventDefault();
  return (dispatch) => {
    dispatch(createTaskRequest());
    axios
      .post(APIRoutes.createTask(), { name: task })
      .then((response) => {
        const newTask = response.data;
        dispatch(createTaskSuccess(newTask));
      })
      .catch((error) => {
        dispatch(createTaskFailure(error.message));
      });
  };
};

export const updateTask = (e, task) => {
  e.preventDefault();
  return (dispatch) => {
    dispatch(updateTaskRequest());
    return axios
      .patch(APIRoutes.updateTask(task._id), {
        name: task.name,
        isCompleted: task.isCompleted,
      })
      .then((response) => {
        const updatedTask = response.data;
        dispatch(updateTaskSuccess(updatedTask));
        return updatedTask;
      })
      .catch((error) => {
        console.log(error);
        dispatch(updateTaskFailure(error.message));
      });
  };
};

export const deleteTaskById = (id) => {
  return (dispatch) => {
    dispatch(deleteTaskByIdRequest());
    axios
      .delete(APIRoutes.deleteTask(id))
      .then((response) => {
        const taskDeleted = response.data;
        dispatch(deleteTaskByIdSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteTaskByIdFailure(error.message));
      });
  };
};
