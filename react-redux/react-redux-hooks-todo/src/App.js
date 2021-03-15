import React from 'react';

import { Provider } from 'react-redux'

import store from './redux/store'

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
