import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

// thunk
import thunkMiddleware from "redux-thunk";

// saga
import createSagaMiddleware from "redux-saga";
import mySaga from "./home/saga";

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
const store = createStore(reducer, storeEnhancer);

// generator Function
sagaMiddleware.run(mySaga);
export default store;
