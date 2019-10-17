import * as types from "../constants/actionType";

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
var gennerateID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    s4() +
    "-" +
    s4() +
    s4() +
    "-" +
    s4() +
    s4() +
    "-" +
    s4() +
    s4()
  );
};
var data = JSON.parse(localStorage.getItem("tasks"));

var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASKS:
      var newTask = {
        id: gennerateID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false
      };
      console.log(action);
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
