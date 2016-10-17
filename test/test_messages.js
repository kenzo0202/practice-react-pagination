import assert from 'assert'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as actions from '../src/actions'
import * as reducers from '../src/reducers'

describe('messagesState', () => {

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
  const store = createStoreWithMiddleware(combineReducers(reducers))

  it('status', () => {
    store.dispatch(actions.addStatusMessage('statusMessage1'))
    store.dispatch(actions.addStatusMessage('statusMessage2'))
    let { statusMessages } = store.getState().messagesState
    assert.equal(statusMessages[0], 'statusMessage1')
    assert.equal(statusMessages[1], 'statusMessage2')
    store.dispatch(actions.clearStatusMessages())
    statusMessages = store.getState().messagesState.statusMessages
    assert.equal(statusMessages.length, 0)
  });

  it('error', () => {
    store.dispatch(actions.addErrorMessage('errorMessage1'))
    store.dispatch(actions.addErrorMessage('errorMessage2'))
    let { errorMessages } = store.getState().messagesState
    assert.equal(errorMessages[0], 'errorMessage1')
    assert.equal(errorMessages[1], 'errorMessage2')
    store.dispatch(actions.clearErrorMessages())
    errorMessages = store.getState().messagesState.errorMessages
    assert.equal(errorMessages.length, 0)
  });

  it('clear', () => {
    store.dispatch(actions.addStatusMessage('statusMessage1'))
    store.dispatch(actions.addErrorMessage('errorMessage1'))
    store.dispatch(actions.clearMessages())
    let { statusMessages } = store.getState().messagesState
    let { errorMessages } = store.getState().messagesState
    assert.equal(statusMessages.length, 0)
    assert.equal(errorMessages.length, 0)
  });



//   it('error', () => {
//     store.dispatch(actions.addStatusMessage('testMessage1'))
//     store.dispatch(actions.addStatusMessage('testMessage2'))
//     const { statusMessages } = store.getState().messagesState
//     assert.equal(statusMessages[0], 'testMessage1')
//     assert.equal(statusMessages[1], 'testMessage2')
//   });

});

