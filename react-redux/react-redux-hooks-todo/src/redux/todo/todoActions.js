import { ADD_TODO, DELETE_TODO } from './todoTypes'

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      id: todo.id,
      label: todo.label,
      completed: false
    }
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}
