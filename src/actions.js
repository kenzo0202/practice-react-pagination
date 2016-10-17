import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const ADD_STATUS_MESSAGE = 'ADD_STATUS_MESSAGE'
export const ADD_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE'
export const CLEAR_STATUS_MESSAGES = 'CLEAR_STATUS_MESSAGES'
export const CLEAR_ERROR_MESSAGES = 'CLEAR_ERROR_MESSAGES'

export function addStatusMessage(msg) {
  return {type: ADD_STATUS_MESSAGE, payload: msg}
}

export function addErrorMessage(msg) {
  return {type: ADD_ERROR_MESSAGE, payload: msg}
}

export function clearStatusMessages() {
  return {type: CLEAR_STATUS_MESSAGES}
}

export function clearErrorMessages() {
  return {type: CLEAR_ERROR_MESSAGES}
}

export function clearMessages() {
  return (dispatch) => {
    dispatch({type: CLEAR_STATUS_MESSAGES})
    dispatch({type: CLEAR_ERROR_MESSAGES})
  }
}

export const SET_USERS = 'SET_USERS'
export const SET_PAGER = 'SET_PAGER'

export function setUsers(users) {
  return {type: SET_USERS, payload: users}
}

export function setPager(pager) {
  return {type: SET_PAGER, payload: pager}
}

export function fetchUsers(page = 1) {
  return (dispatch) => {
    dispatch({type: CLEAR_STATUS_MESSAGES})
    dispatch({type: CLEAR_ERROR_MESSAGES})
    dispatch({type: ADD_STATUS_MESSAGE, payload: ['start fetching users']})
    return axios.get(`${BASE_URL}/api/users?page=${page}`).then((response) => {
      dispatch({type: SET_USERS, payload: response.data.users })
      dispatch({type: SET_PAGER, payload: response.data.pager })
      dispatch({type: ADD_STATUS_MESSAGE, payload: 'finish fetching users'})
    }).catch((err) => {
      console.error(err.message)
      dispatch({type: CLEAR_MESSAGE})
      dispatch({type: ADD_ERROR_MESSAGE, payload: 'fail fetching users'})
    })
  };
}
