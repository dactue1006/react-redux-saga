export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const POST_TODOS_REQUEST = "POST_TODOS_REQUEST";
export const POST_TODOS_SUCCESS = "POST_TODOS_SUCCESS";
export const POST_TODOS_FAILURE = "POST_TODOS_FAILURE";

// get list todos
export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST
})

export const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: { data }
})

export const getTodosFailure = (error) => ({
  type: GET_TODOS_FAILURE,
  payload: { error }
})

// create new todo
export const postTodosRequest = (data) => ({
  type: POST_TODOS_REQUEST,
  payload: { data }
})

export const postTodosSuccess = (data) => ({
  type: POST_TODOS_SUCCESS,
  payload: { data }
})

export const postTodosFailure = (error) => ({
  type: POST_TODOS_FAILURE,
  payload: { error }
})