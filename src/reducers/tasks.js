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

var findIndex = (id, tasks) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
  let index = '';
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASKS:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status === "true" ? true : false
      };
      if(!task.id){
        task.id = gennerateID();
        state.push(task);
      }else{
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      let id = action.id;
      index = findIndex(id, state);
      state[index] = {
          ...state[index],
          status: !state[index].status
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]
    case types.DELETE_TASK:
      let idDelete = action.id;
      let indexDelete = findIndex(idDelete, state);
      state.splice(indexDelete, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]
    default:
      return state;
  }
};

export default myReducer;
