import axios from "axios";

import { CHANGE_BANNER, CHANGE_RECOMMEND } from "./constants.js";

export const changeBannerAction = (banner) => ({
  type: CHANGE_BANNER,
  banner,
});

export const changeRecommendAction = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend,
});

// 自己会传入两个参数
export const getHomeMultidataAction = (dispatch, getState) => {
  console.log(1);
};
