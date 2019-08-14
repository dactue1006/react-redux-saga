export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAILURE = "CREATE_TODO_FAILURE";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const EDIT_TASK = "EDIT_TASK";
export const EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST";
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
export const EDIT_TODO_FAILURE = "EDIT_TODO_FAILURE";

// get list todos
export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST
})

export const getTodosSuccess = (todos) => ({
  type: GET_TODOS_SUCCESS,
  payload: { todos }
})

export const getTodosFailure = (error) => ({
  type: GET_TODOS_FAILURE,
  payload: { error }
})

// create new todo
export const createTodoRequest = (todo) => ({
  type: CREATE_TODO_REQUEST,
  payload: { todo }
})

export const createTodoSuccess = (todo) => ({
  type: CREATE_TODO_SUCCESS,
  payload: { todo }
})

export const createTodoFailure = (error) => ({
  type: CREATE_TODO_FAILURE,
  payload: { error }
})

// delete todo
export const deleteTodoRequest = (id) => ({
  type: DELETE_TODO_REQUEST,
  payload: { id }
})

export const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: { id }
})

export const deleteTodoFailure = (error) => ({
  type: DELETE_TODO_FAILURE,
  payload: { error }
})

// edit task
export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: { id }
})

export const editTodoRequest = (id, todo) => ({
  type: EDIT_TODO_REQUEST,
  payload: { id, todo }
})

export const editTodoSuccess = (todo) => ({
  type: EDIT_TODO_SUCCESS,
  payload: { todo }
})

export const editTodoFailure = (error) => ({
  type: EDIT_TODO_FAILURE,
  payload: { error }
})