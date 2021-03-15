# REDUX

#### Actions

- Actions are objects with a 'type' attribute on them

    - Actions Types
    
        - Action types are just STRINGS to identify the action is going to be dispatched

        ```javascript
        export const DELETE_TODO = 'DELETE_TODO'
        ```

    - Actions Creators

        - Actions creators are functions that create actions (objects with a 'type' attribute on them).
    
        - In the object we can have also a 'payload' which is additional information

        ```javascript
        import { DELETE_TODO } from './todoTypes'

        export const deleteTodo = id => {
            return {
                type: DELETE_TODO,
                payload: id
            }
        }
        ```

    - Actions get dispatched in our components. We can make use of 'useDispatch' HOOK from 'react-redux' to be able to use the dispatch function
    
    ```javascript
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
    ```

#### Reducers
- Reducers are functions that have this structure (prevState, action) => newState
    
- They are used to modify elements of the 'store'


    ```javascript
    import { DELETE_TODO } from './todoTypes'

    const initialState = {
        todoList: []
    }

    const todoReducer = (state = initialState, action) => {
        switch(action.type) {

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
    ```

#### Selectors
- Selectors are functions used to GET data from the store by using the 'useSelector' function

- Structure: useSelector(state => state.-property-)

- We can make use of 'useSelector' HOOK from 'react-redux' to be able to use the 'useSelector' function

```javascript
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
```

#### Store

- The Store is the source of truth. Is an object that contains all the data of the application.

- We create a store by using the method 'createStore' and passing a reducer as a parameter

```javascript
import { createStore } from 'redux'

import todoReducer from './todo/todoReducer'

const store = createStore(todoReducer)

export default store
```

- If we have more than 1 reducer, you can combine them into a rootReducer by using the 'combineReducers' function.

- You can even initialise the store with an 'initial state'

```javascript
import {combineReducers, createStore} from 'redux'
import {initialApplicationState} from '../initial-state'
import {playersReducer} from './players/reducer'
import {teamsReducer} from './teams/reducer'

const rootReducer = combineReducers({
    players: playersReducer,
    teams: teamsReducer
})

export type State = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    initialApplicationState as any,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
```

#### MiddleWare

- With the Middleware with enchance the functionalities of our react application

- You use the 'applyMiddleware' function from 'redux' and pass the enchancements as parameters.

- You will use this as a second parameter when creating the store. 
createStore(reducer, applyMiddleware(-Middleware-))

```javascript
import { createStore, applyMiddleware } from 'redux'

// https://github.com/zalmoxisus/redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger'

import { rootReducer } from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
```