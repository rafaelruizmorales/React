import { createStore, applyMiddleware } from 'redux'

// https://github.com/zalmoxisus/redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger'

import { rootReducer } from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
