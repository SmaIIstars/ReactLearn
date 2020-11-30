import { CHANGE_BANNER, CHANGE_RECOMMEND } from "./constants.js";

// home
const initalHomeState = {
  banner: [],
  recommend: [],
};

function homeReducer(homeInfo = initalHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
    case CHANGE_RECOMMEND:
    default:
      return homeInfo;
  }
}

export default homeReducer;
