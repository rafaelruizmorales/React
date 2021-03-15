import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { fetchUsers } from '../redux'

const UserContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const users = useSelector(store => store.users.users)
  const rows = users.map(user => {
    return (
      <tr key={user.id}>
        <th>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    )
  })

  return (
    users &&
    <div>
      <h2>Users</h2>
      <table align="center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default UserContainer