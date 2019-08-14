import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  CREATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  EDIT_TASK,
  EDIT_TODO_FAILURE,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS
} from "./action";

const intialState = {
  isLoading: false,
  todos: null,
  error: null
}

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
    case CREATE_TODO_REQUEST:
    case DELETE_TODO_REQUEST:
    case EDIT_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.todos
      }

    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload.todo]
      }
      
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }

    case EDIT_TODO_SUCCESS:
      console.log(action.payload.todo);
      return {
        ...state,
        isLoading: false,
        todos: state.todos.map(todo => todo.id === action.payload.todo.id ? action.payload.todo : todo)
      }

    case EDIT_TASK: 
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, isEditting: true} : todo)
      }
      
    case GET_TODOS_FAILURE:
    case CREATE_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
    case EDIT_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}