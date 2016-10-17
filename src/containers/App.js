import React from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { GrowlerContainer } from 'flash-notification-react-redux';

function App(state) {
  const { children } = state;
  return (
    <div className="container">
      <GrowlerContainer />
      <header>
        <h1>Practice React Redux Router Pagination</h1>
        <ul className="nav nav-pills">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </header>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

export default connect()(App)
