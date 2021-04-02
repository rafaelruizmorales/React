import { combineReducers } from 'redux'

import fileInputReducer from './fileInput/fileInputReducer'

export const rootReducer = combineReducers({
    fileInput: fileInputReducer
})

export type RootState = ReturnType<typeof rootReducer>