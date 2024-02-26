import React from 'react'
import UserList from './UserTable'

const UsersPage = () => {
  return (
    <div>
      <h1 className='font-bold px-4 py-3 border-b bg-white shadow-sm'>Users</h1>
      <UserList />
    </div>
  )
}

export default UsersPage
