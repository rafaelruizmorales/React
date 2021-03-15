import React from 'react';

import { useSelector } from 'react-redux'

import TodoItem from './TodoItem';

const TodoList = () => {
  
  const todos = useSelector(state => state.todoList)
  
  return (
    todos &&
    <div>
      <table align="center">
        <thead>
          <tr>
            <th colSpan="3"><h2>TO DO</h2></th>
          </tr>
        </thead>
        <tbody>
          <TodoItem todos={todos} />
        </tbody>
      </table>
    </div>
  );
}

export default TodoList