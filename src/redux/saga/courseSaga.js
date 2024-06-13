import { call, put } from "redux-saga/effects";
import getCourse from "../../actions/getCourse";

export default function* (action) {
  const course = yield call(getCourse);

  yield put({
    type: "SET_COURSE",
    payload: course.data,
  });
}
