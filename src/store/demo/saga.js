import { takeLatest, take, call, put } from "redux-saga/effects";
import { 
  GET_TODOS_REQUEST,
  getTodosSuccess,
  getTodosFailure,
  postTodosSuccess,
  postTodosFailure,
  POST_TODOS_REQUEST
} from "./action";

import axios from "axios";

function* watcherSaga() {
  yield takeLatest(GET_TODOS_REQUEST, workerSaga);
}

function* watcherSaga2() {
  yield takeLatest(POST_TODOS_REQUEST, workerSaga2);
}

function fetchTodos() {
  return axios({
    method: "GET",
    url: "http://localhost:8080/todos"
  })
}

function postTodos(data) {
  console.log("data", data.payload.data)
  return axios({
    method: "POST",
    url: "http://localhost:8080/todos",
    data: data.payload.data
  })
}

function* workerSaga() {
  try {
    const response = yield call(fetchTodos);
    console.log(response);
    const data = response.data;
    yield put(getTodosSuccess(data))
  } catch (error) {
    yield put(getTodosFailure(error))
  }
}

function* workerSaga2(data) {
  try {
    yield call(postTodos, data);
    const response = yield call(fetchTodos);
    console.log(response);
    yield put(postTodosSuccess(response.data))
  } catch (error) {
    yield put(postTodosFailure(error));
  }
}

export default [watcherSaga(), watcherSaga2()];