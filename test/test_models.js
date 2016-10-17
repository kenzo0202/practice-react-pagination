import assert from 'assert'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as actions from '../src/actions'
import articleApp from '../src/reducers'

describe('modelsState', () => {

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
  const store = createStoreWithMiddleware(articleApp)

  it('categories', () => {
    store.dispatch(actions.setCategories([{id: 1, en: 'cat1'}, {id: 2, en: 'cat2'}]))
    let { categories } = store.getState().modelsState
    assert.equal(categories.length, 2)
  });

  it('articles', () => {
    store.dispatch(actions.setArticles([{id: 1, title: 'title1'}, {id: 2, title: 'title2'}]))
    let { articles } = store.getState().modelsState
    assert.equal(articles.length, 2)
  });

  it('parger', () => {
    store.dispatch(actions.setPager({currentPage: 1, rowsPerPage: 10, totalResults: 100}))
    let { pager } = store.getState().modelsState
    assert.deepEqual(pager, {currentPage: 1, rowsPerPage: 10, totalResults: 100})
  });
});

