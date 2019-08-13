import {
  ADD_NEW_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SAVE_EDIT_TASK,
  TOGGLE_TASK
} from "./action";

const initialState = {
  todos: [
    {
      id: 0,
      isComplete: true,
      isEditting: false,
      description: "Example"
    }
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      const { todos } = state;
      let id = todos.length ? todos[todos.length - 1].id + 1 : 0;
      let newTask = {
        id,
        isComplete: false,
        isEditting: false,
        description: action.payload.description
      }
      return {
        ...state,
        todos: [
          ...todos,
          newTask
        ]
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(task => task.id !== action.payload.id)
      }

    case EDIT_TASK:
      console.log(action);
      return {
        ...state,
        todos: state.todos.map(
          task => task.id === action.payload.id
            ? { ...task, isEditting: true }
            : task
        )
      };

    case SAVE_EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map(
          task => task.id === action.payload.id
            ? {
              ...task,
              description: action.payload.newDescription,
              isEditting: false
            }
            : task
        )
      };

    case TOGGLE_TASK:
      return {
        ...state,
        todos: state.todos.map(
          task => task.id === action.payload.id
            ? {
              ...task,
              isComplete: !task.isComplete
            }
            : task
        )
      }

    default:
      return state;
  }
}