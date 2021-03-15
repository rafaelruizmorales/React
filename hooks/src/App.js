import React, { useReducer } from 'react'

import UseContextComponent from './components/useContext/UseContextComponent'
import UseStateComponent from './components/useState/UseStateComponent'
import UseEffectComponent from './components/useEffect/UseEffectComponent'

import ComponentA3 from './components/useReducer/ComponentA3'

import UseRefComponent from './components/useRef/UseRefComponent'

export const UserContext = React.createContext()
export const LangContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  const userData = {
    name: 'Rafa',
    age: 37,
  }
  
  return (
    <>
      <UserContext.Provider value={userData}>
        <LangContext.Provider value={'ES'}>
          <UseContextComponent />
        </LangContext.Provider>
      </UserContext.Provider>

      <UseStateComponent />

      <UseEffectComponent />

      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA3 />
      </CountContext.Provider>

      <UseRefComponent />
    </>
  );
}

export default App;
