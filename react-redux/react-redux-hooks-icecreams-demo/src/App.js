import React from 'react';

import { Provider } from 'react-redux'

import store from './redux/store'

import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/iceCreamContainer'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
