/**
 * node -v: 13.2.0
 * 之前只需要在package.json种增加 "type": "module"
 * 之后还需要在scripts中增加 "--experimental-modules" 参数
 */

import store from "./store/index.js";
import { addAction, subAction } from "./store/actionCreator.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addAction(10));
store.dispatch(addAction(15));
store.dispatch(addAction(10));
store.dispatch(subAction(20));
store.dispatch(subAction(3));
store.dispatch(subAction(1));
