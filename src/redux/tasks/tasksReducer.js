import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASK_BY_ID,
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
        payload: state.filter((task) => task.id === action.payload.id),
      };
    }

    default:
      return state;
  }
};

export default reducer;
