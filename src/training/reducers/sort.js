import { SORT } from "../constants/actionType";

var intitialState = {
    by: "name",
    value: 1
};

var myReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SORT:
      var { by, value } = action.sort;
      return {
          by: by,
          value: value
      };
    default:
      return state;
  }
};

export default myReducer;
