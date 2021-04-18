import { combineReducers } from 'redux'

import productsReducer from './products/productsReducer'

export const rootReducer = combineReducers({
    products: productsReducer,
})
