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
} from "./tasksTypes";

const initialState = {
  loading: false,
  tasks: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    }

    case FETCH_TASKS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case FETCH_TASK_BY_ID: {
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    }

    case DELETE_TASK_BY_ID_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_TASK_BY_ID_SUCCESS: {
      const { [action.payload]: deletedTask, ...updatedTasks } = state.tasks;
      return {
        ...state,
        loading: false,
        tasks: updatedTasks,
      };
    }

    case DELETE_TASK_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    }

    case CREATE_TASK_REQUEST: {
      return {
        ...state,
        loading: true,
        payload: action.payload,
      };
    }

    case CREATE_TASK_SUCCESS: {
      const { task } = action.payload;
      return {
        ...state,
        //tasks:  update tasks with new task
        loading: false,
      };
    }

    case CREATE_TASK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
