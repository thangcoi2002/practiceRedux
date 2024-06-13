import { call, put } from "redux-saga/effects";

function* updateMode(darkMode) {
  yield put({
    type: "CHANGE_APP_MODE_SUCCESS",
    payload: darkMode,
  });
}

export default function* (action) {
  yield call(updateMode, action.payload.darkMode);
}
