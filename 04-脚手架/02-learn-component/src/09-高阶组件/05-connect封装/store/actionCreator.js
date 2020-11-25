import { ADDITION, SUBSTRACTION, ADDNUMBER, SUBNUMBER } from "./contanst";

export const additionAction = () => ({
  type: ADDITION,
});

export const substractionAction = () => ({
  type: SUBSTRACTION,
});

export const addNumberAction = (num) => ({
  type: ADDNUMBER,
  num,
});

export const subNumberAction = (num) => ({
  type: SUBNUMBER,
  num,
});
