import { all, takeEvery } from "redux-saga/effects";
import appSaga from "./appSaga";
import courseSaga from "./courseSaga";

export default sagas = function* () {
  yield all([
    takeEvery("CHANGE_APP_MODE", appSaga),
    takeEvery("GET_COURSES", courseSaga),
  ]);
};
