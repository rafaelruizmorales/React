import { AnyAction } from 'redux'

import {
    FETCH_FILE_CONTENT_REQUEST,
    FETCH_FILE_CONTENT_SUCCESS,
    FETCH_FILE_CONTENT_FAILURE,
} from './fileInputActionTypes'

const initialState = {
    loading: false,
    fileContent: {},
    error: ''
}

const fileInputReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
    case FETCH_FILE_CONTENT_REQUEST:
        return {
            ...state,
            loading: true
        }
    case FETCH_FILE_CONTENT_SUCCESS:
        return {
            ...state,
            loading: false,
            fileContent: action.payload,
            error: ''
        }
    case FETCH_FILE_CONTENT_FAILURE: 
        return {
            ...state,
            loading: false,
            fileContent: {},
            error: action.payload
        }

    default: return state
    }
}

export default fileInputReducer