import axios from 'axios'
import { GrowlerActions } from 'flash-notification-react-redux';
const BASE_URL = 'http://localhost:3000'

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
    // dispatch(GrowlerActions.showGrowlerSuccess('start fetching'))
    return axios.get(`${BASE_URL}/api/users?page=${page}`).then((response) => {
      dispatch(GrowlerActions.showGrowlerSuccess(`GET /users?page=${page}`))
      dispatch({type: SET_USERS, payload: response.data.users })
      dispatch({type: SET_PAGER, payload: response.data.pager })
    }).catch((err) => {
      console.error(err.message)
      dispatch(GrowlerActions.showGrowlerError(err.message))
    })
  };
}
