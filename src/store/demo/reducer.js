import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  POST_TODOS_FAILURE,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS
} from "./action";

const intialState = {
  isLoading: false,
  todos: null, 
  error: null
}

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.data
      }

    case GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    case POST_TODOS_REQUEST:
      console.log("post")
      return {
        ...state,
        isLoading: true
      }

    case POST_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.data
      }

    case POST_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}