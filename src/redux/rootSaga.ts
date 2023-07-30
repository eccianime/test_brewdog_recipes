import { all } from "redux-saga/effects";
import listSagas from "./list/sagas";
import detailsSagas from "./details/sagas";

export default function* rootSaga() {
  yield all([...listSagas, ...detailsSagas]);
}
