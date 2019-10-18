import { TOGGLE } from "../constants/actionType";

var intitialState = false;

var myReducer = (state = intitialState, action) => {
  switch (action.type) {
    case TOGGLE:
      state = !state;
      return state;
    default:
      return state;
  }
};

export default myReducer;
