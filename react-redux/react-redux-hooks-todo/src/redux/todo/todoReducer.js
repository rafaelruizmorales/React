import { ADD_TODO, DELETE_TODO } from './todoTypes'

const initialState = {
  todoList: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    }

    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload)
      }
    }

    default: return state
  }
}

export default todoReducer;
