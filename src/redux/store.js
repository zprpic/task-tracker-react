import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import tasksReducer from "./tasks/tasksReducer";

const store = createStore(tasksReducer, applyMiddleware(logger, thunk));

export default store;
