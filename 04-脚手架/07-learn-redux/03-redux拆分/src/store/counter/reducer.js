import { ADD_NUMBER, SUB_NUMBER } from "./constants.js";

// counter
const initalCounterState = {
  counter: 0,
};

function counterReducer(counterInfo = initalCounterState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...counterInfo, counter: counterInfo.counter + action.num };
    case SUB_NUMBER:
      return { ...counterInfo, counter: counterInfo.counter - action.num };
    default:
      return counterInfo;
  }
}

export default counterReducer;
