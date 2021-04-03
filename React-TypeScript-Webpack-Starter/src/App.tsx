import * as React from 'react'

import { Provider } from 'react-redux'

import { store } from './redux/store'

import Welcome from './components/Welcome'
import UserContainer from './components/UserContainer'

export const App: React.FC = () => {
  const age = 34

  return (
    <Provider store={store}>
      <div>
        <Welcome name="Yun" />
        <Welcome name="Rafa" age={age} />
        <UserContainer />
      </div>
    </Provider>
  )
}
