import axios from "axios";

import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  FETCH_GET_MULTIDATA,
} from "./constants.js";

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
  // console.log(getState());
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    const { data } = res.data;
    // console.log(data);
    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  });
};

// saga
export const fetchGetMultidataAction = () => ({
  type: FETCH_GET_MULTIDATA,
});
