import { combineReducers } from 'redux'
import {
  ADD_STATUS_MESSAGE, ADD_ERROR_MESSAGE, CLEAR_STATUS_MESSAGES, CLEAR_ERROR_MESSAGES,
  SET_USERS, SET_PAGER
} from './actions'

export function messagesState(state = {
    statusMessages: [],
    errorMessages: []
  }, action) {
  switch (action.type) {
    case ADD_STATUS_MESSAGE:
      return Object.assign({}, state, {
        statusMessages: [...state.statusMessages, action.payload]
      })
    case ADD_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessages: [...state.errorMessages, action.payload]
      })
    case CLEAR_STATUS_MESSAGES:
      return Object.assign({}, state, {
        statusMessages: []
      })
    case CLEAR_ERROR_MESSAGES:
      return Object.assign({}, state, {
        errorMessages: []
      })
    default:
      return state
  }
}

export function modelsState(state = {
    users: [],
    pager: {}
  }, action) {
  switch (action.type) {
    case SET_USERS:
      return Object.assign({}, state, {
        users: action.payload
      })
    case SET_PAGER:
      return Object.assign({}, state, {
        pager: action.payload
      })
    default:
      return state
  }
}
