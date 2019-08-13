export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const SAVE_EDIT_TASK = "SAVE_EDIT_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";


export const addNewTask = (description) => ({
  type: ADD_NEW_TASK,
  payload: { description }
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
})

export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: { id }
})

export const saveEditTask = (id, newDescription) => ({
  type: SAVE_EDIT_TASK,
  payload: {
    id,
    newDescription
  }
})

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
})




