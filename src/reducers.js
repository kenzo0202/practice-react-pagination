import { combineReducers } from 'redux'
import { SET_USERS, SET_PAGER } from './actions'

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
