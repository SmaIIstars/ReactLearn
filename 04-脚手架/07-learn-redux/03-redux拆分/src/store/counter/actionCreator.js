import { ADD_NUMBER, SUB_NUMBER } from "./constants.js";

// 简写 (需要用()把对象括起来)
export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});
