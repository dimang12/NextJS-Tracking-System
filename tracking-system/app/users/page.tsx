import React, { Suspense } from 'react'
import UserList from './UserTable'
import Breadcrumb from '../components/Breadcrumb'
import LinkCircleButton from '../components/buttons/LinkCircleButton'
import Loading from '../loading'


// create a new interface to define the props
interface UserProps {
  searchParams: { 
    sortOrder: string,
    order: string
  }
}

const UsersPage = async ({searchParams: {sortOrder, order} }: UserProps ) => {

  return (
    <div>
      <Breadcrumb title='User'>
        <LinkCircleButton linkTo='/users/new' className={'fa-plus'} />
      </Breadcrumb>
      <Suspense fallback={<Loading />}>
        <UserList sortOrder={sortOrder} order={order} />
      </Suspense>
    </div>
  )
}

export default UsersPage
