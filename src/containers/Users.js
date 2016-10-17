import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import BootstrapPaginator from '../components/BootstrapPaginator'

class Users extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.location.query.page === this.props.location.query.page) {
      return
    }
    const page = this.props.location.query.page || 1
    this.props.fetchUsers(page)
  }

  componentDidMount() {
    const page = this.props.location.query.page || 1
    this.props.fetchUsers(page)
  }

  render (props) {
    const {users, pager} = this.props
    return (
      <div>
        <h2>Users Components</h2>

        <div className="text-center">
          <BootstrapPaginator pager={pager} prelink="/users" />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <BootstrapPaginator pager={pager} prelink="/users" />
        </div>
      </div>
    )
  }
}

export default connect(state => (state.modelsState), {fetchUsers})(Users)
