import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Go to /users?page=2</p>
      <button onClick={() => browserHistory.push('/users?page=2')}>Go</button>
    </div>
  )
}

export default connect()(Home)
