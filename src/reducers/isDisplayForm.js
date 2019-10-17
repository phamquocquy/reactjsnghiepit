import * as types from "../constants/actionType";

var initialState = false;
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      state = !state;
      return state;
    case types.OPEN_FORM:
      return true;
    case types.CLOSE_FORM:
      return false;
    default:
      return state;
  }
};

export default myReducer;
