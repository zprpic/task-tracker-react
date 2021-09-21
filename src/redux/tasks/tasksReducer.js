import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASK_BY_ID,
  DELETE_TASK_BY_ID_REQUEST,
  DELETE_TASK_BY_ID_SUCCESS,
  DELETE_TASK_BY_ID_FAILURE,
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
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    }

    case DELETE_TASK_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
