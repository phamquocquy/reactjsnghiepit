import { TOGGLE, SORT } from "../const/actionType";

var intitialState = {
  status: false,
  sort: {
    by: "name",
    value: 1
  }
};

var myReducer = (state = intitialState, action) => {
  switch (action.type) {
    case TOGGLE:
      state.status = !state.status;
      return state;
    case SORT:
      var { by, value } = action.sort;
      var { status } = state;
      return {
        status: status,
        sort: {
          by: by,
          value: value
        }
      };
    default:
      break;
  }
};

export default myReducer;
