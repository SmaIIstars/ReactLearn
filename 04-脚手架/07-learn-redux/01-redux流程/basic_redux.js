// node index.js
// 通过node执行js代码
// node不能使用ES6导入

const redux = require("redux");

const initialState = {
  counter: 0,
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_COUNTER":
      return { ...state, counter: state.counter + action.num };
    case "SUB_DECREMENT":
      return { ...state, counter: state.counter - action.num };

    // 没匹配到返回原数据
    default:
      return state;
  }
}

// store (创建的时候传入reducer)
const store = redux.createStore(reducer);

// 订阅 state 修改
store.subscribe(() => {
  console.log("counter: ", store.getState().counter);
});

// actions
const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };

const action3 = { type: "ADD_COUNTER", num: 5 };
const action4 = { type: "SUB_DECREMENT", num: 12 };

// 派发action (执行reducer)
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
