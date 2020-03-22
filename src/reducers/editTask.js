import * as types from "../constants/actionType";

var initialState = {}
var editReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      return action.task
    default:
      return state;
  }
};

export default editReducer;
