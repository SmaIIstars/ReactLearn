// node index.js
// 通过node执行js代码
// node不能使用ES6导入
const redux = require("redux");

// store
const store = redux.createStore(reducer);

// state
const initState = {
  counter: 0,
};

// subscribe
store.subscribe(() => {
  console.log("counter", store.getState());
});

// reducer
const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter + 1 };
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + payload.counter };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - payload.counter };

    default:
      return state;
  }
};

// action
const action1 = () => ({
  type: "INCREMENT",
});

const action2 = () => ({
  type: "DECREMENT",
});

const action3 = (num) => ({
  type: "ADD_NUMBER",
  payload: {
    num,
  },
});

const action4 = (num) => ({
  type: "SUB_NUMBER",
  payload: {
    num,
  },
});

// dispatch
store.dispatch(action1());
store.dispatch(action1());
store.dispatch(action2());
store.dispatch(action2());
store.dispatch(action3(5));
store.dispatch(action4(12));
