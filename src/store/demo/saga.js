import { takeLatest, call, put } from "redux-saga/effects";
import { 
  GET_TODOS_REQUEST,
  CREATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  getTodosSuccess,
  getTodosFailure,
  createTodoSuccess,
  createTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
  EDIT_TODO_REQUEST,
  editTodoSuccess,
  editTodoFailure
} from "./action";

import axios from "axios";

// get todos
function* watchGetTodos() {
  yield takeLatest(GET_TODOS_REQUEST, workGetTodos);
}

function fetchTodos() {
  return axios({
    method: "GET",
    url: "http://localhost:8080/todos"
  })
}

function* workGetTodos() {
  try {
    const response = yield call(fetchTodos);
    const data = response.data;
    yield put(getTodosSuccess(data))
  } catch (error) {
    yield put(getTodosFailure(error))
  }
}

// create new todo
function* watchCreateTodo() {
  yield takeLatest(CREATE_TODO_REQUEST, workCreateTodo);
}

function createTodo(action) {
  return axios({
    method: "POST",
    url: "http://localhost:8080/todos",
    data: action.payload.todo
  })
}

function* workCreateTodo(action) {
  try {
    const response = yield call(createTodo, action);
    yield put(createTodoSuccess(response.data));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

// delete todo
function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO_REQUEST, workDeleteTodo);
}

function deleteTodo(action) {
  return axios({
    method: "DELETE",
    url: `http://localhost:8080/todos/${action.payload.id}`
  })
}

function* workDeleteTodo(action) {
  try {
    yield call(deleteTodo, action);
    yield put(deleteTodoSuccess(action.payload.id));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

// edit todo
function* watchEditTodo() {
  yield takeLatest(EDIT_TODO_REQUEST, workEditTodo);
}

function editTodo(action) {
  return axios({
    method: "PUT",
    url: `http://localhost:8080/todos/${action.payload.id}`,
    data: action.payload.todo
  })
}
 
function* workEditTodo(action) {
  try {
    const response = yield call(editTodo, action);
    yield put(editTodoSuccess(response.data));
  } catch (error) {
    yield put(editTodoFailure(error));
  }
}

export default [watchGetTodos(), watchCreateTodo(), watchDeleteTodo(), watchEditTodo()];