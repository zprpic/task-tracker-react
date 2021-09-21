import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import tasksReducer from "./tasks/tasksReducer";

const store = createStore(tasksReducer, applyMiddleware(thunk, logger));

export default store;
