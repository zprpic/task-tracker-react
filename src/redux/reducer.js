import reducer from "../../../../redux-starter/redux-starter/src/reducer";
import * as actions from "./actionTypes";

const initialState = {
  loading: false,
  tasks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TASKS:
      return [...state, { tasks }];
  }
}
