import React from 'react';

import { deleteTodo } from '../redux/todo/todoActions';

import { useDispatch } from 'react-redux'

const TodoItem = ( {todos} ) => {

  const dispatch = useDispatch()

  return (
    todos.map(todo => {
      return (
        <tr key={todo.id}>
          <th>{todo.id}</th>
          <th>{todo.label}</th>
          <th><span onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</span></th>
        </tr>
      )
    })
  );
}

export default TodoItem