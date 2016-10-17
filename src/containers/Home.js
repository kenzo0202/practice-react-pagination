import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <p>Go to /users?page=2</p>
      <button onClick={() => browserHistory.push('/users?page=2')}>Go</button>
    </div>
  )
}

function mapStateToProps(state) {
  const { statusMessages, errorMessages } = state.messagesState;
  const { categories, articles } = state.modelsState;
  return { statusMessages, errorMessages, categories, articles }
}

export default connect(mapStateToProps)(Home)
