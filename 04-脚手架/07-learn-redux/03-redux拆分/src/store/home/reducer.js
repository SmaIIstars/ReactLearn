import { CHANGE_BANNER, CHANGE_RECOMMEND } from "./constants.js";

// home
const initalHomeState = {
  banner: [],
  recommend: [],
};

function homeReducer(homeInfo = initalHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      // 在 action 里面取参数
      return { ...homeInfo, banner: action.banner };
    case CHANGE_RECOMMEND:
      return { ...homeInfo, recommend: action.recommend };

    default:
      return homeInfo;
  }
}

export default homeReducer;
