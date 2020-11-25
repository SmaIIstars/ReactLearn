import { ADDITION, SUBSTRACTION, ADDNUMBER, SUBNUMBER } from "./contanst";

const initState = {
  num: 0,
};

const reducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case ADDITION:
      return { ...state, num: state.num + 1 };
    case SUBSTRACTION:
      return { ...state, num: state.num - 1 };
    case ADDNUMBER:
      return { ...state, num: state.num + action.num };
    case SUBNUMBER:
      return { ...state, num: state.num - action.num };
    default:
      return state;
  }
};

export default reducer;
