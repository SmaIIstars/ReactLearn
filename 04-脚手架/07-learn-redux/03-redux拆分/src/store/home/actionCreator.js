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
  // console.log("发起网络请求");
  axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    const data = res.data.data;
    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  });
};
