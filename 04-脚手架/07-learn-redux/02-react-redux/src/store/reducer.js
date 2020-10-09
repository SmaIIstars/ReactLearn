import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
} from "./constants.js";

const defaultState = {
  counter: 0,
  banner: [],
  recommend: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNER:
      // 在 action 里面取参数
      return { ...state, banner: action.banner };
    case CHANGE_RECOMMEND:
      return { ...state, recommend: action.recommend };

    default:
      return state;
  }
}

export default reducer;
