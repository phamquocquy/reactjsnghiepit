/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import {createStore} from "redux";

const initialState = {
    status: false,
    value : 1
}

const myReducer = (state = initialState, action) => {
    console.log(action,'state')
    switch ( action.type ) {
        case 'TOGGLE_STATUS':
            state.status =  !state.status
            return state
        case 'SORT':
            state.value = action.value
            return state
        default:
            return state
    }
}

const store = createStore(myReducer);

const action = { type : "TOGGLE_STATUS" }
store.dispatch(action);

const sortAction = {
    type: 'SORT',
    value: -1
}

store.dispatch(sortAction);
console.log(store.getState());