import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import reducer from "./reducer.js";

// 使用 redux_dev_tools 插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 在 dispatch -> 中间件 -> reducer
// 使用中间件 (异步操作)
const StoreEnhancer = applyMiddleware(thunkMiddleWare);

const store = createStore(reducer, composeEnhancers(StoreEnhancer));

export default store;
