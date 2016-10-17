import assert from 'assert'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as actions from '../src/actions'
import * as reducers from '../src/reducers'

describe('modelsState', () => {

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
  const store = createStoreWithMiddleware(combineReducers(reducers))

  it('users', () => {
    store.dispatch(actions.setUsers([{id: 1, name: 'name001'}, {id: 2, name: 'name002'}]))
    let { users } = store.getState().modelsState
    assert.equal(users.length, 2)
  });

  it('parger', () => {
    store.dispatch(actions.setPager({currentPage: 1, rowsPerPage: 10, totalResults: 100}))
    let { pager } = store.getState().modelsState
    assert.deepEqual(pager, {currentPage: 1, rowsPerPage: 10, totalResults: 100})
  });
});

