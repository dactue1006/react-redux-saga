import { all } from "redux-saga/effects"
import watcherSage from "./demo/saga";

export default function* rootSagas() {
  yield all([
    ...watcherSage
  ]);
}
