import axios from "axios";
import { all, put, takeEvery } from "redux-saga/effects";
import { FETCH_GET_MULTIDATA } from "./constants";
import { changeBannerAction, changeRecommendAction } from "./actionCreator";

function* fetchGetMultidata(action) {
  const {
    data: { data },
  } = yield axios({
    url: "http://123.207.32.32:8000/home/multidata",
  });
  yield all([
    put(changeBannerAction(data.banner.list)),
    put(changeRecommendAction(data.recommend.list)),
  ]);
}

function* mySaga() {
  // action.type, generator
  yield takeEvery(FETCH_GET_MULTIDATA, fetchGetMultidata);
}

export default mySaga;
