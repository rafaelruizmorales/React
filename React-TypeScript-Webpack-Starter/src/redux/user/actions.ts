import axios from 'axios'

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './action-types'

import { users } from './model'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export const fetchUsersSuccess = (users: users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error: string) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch(fetchUsersRequest)

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
