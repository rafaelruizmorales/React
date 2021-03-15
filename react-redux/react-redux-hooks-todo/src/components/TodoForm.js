import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo/todoActions';

const TodoForm = () => {
  const [todoName, setTodoName] = useState('')

  const dispatch = useDispatch()

  return (
    <div>
        <input 
          type="text"
          value={todoName}
          onChange={e => setTodoName(e.target.value)}
        />
        <button 
          onClick={() => dispatch(
            addTodo({
                id: uuidv4(),
                label: todoName,
            })
          )}>
            ADD TODO
        </button>
    </div>
  );
}

export default TodoForm