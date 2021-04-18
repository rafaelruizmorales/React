import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

const preloadedState = {}

export type State = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  preloadedState as any,
  composeWithDevTools(applyMiddleware(thunk))
)