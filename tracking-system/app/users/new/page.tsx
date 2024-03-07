'use client'

import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb'
import FieldInput from '@/app/components/inputs/FieldInput'
import { Button } from "@material-tailwind/react"
import { useRouter } from 'next/navigation'


const NewUserPage = () => {
  const router = useRouter()

  const handleCancel = () => {
    router.back()
  }
  return (
    <div>
      <Breadcrumb title='Add new user'></Breadcrumb>
      <div className='p-5 w-96 flex flex-col space-y-4'>
        <FieldInput label='First name'></FieldInput>
        <FieldInput label='Last name'></FieldInput>
        <FieldInput label='Email'></FieldInput>
        <FieldInput label='Role'></FieldInput>
        <div className='flex space-x-3 justify-end'>
          <Button onClick={handleCancel} color='gray' placeholder={'Cancel'}>
            Cancel <i className='ml-2 fas fa-times'></i>
          </Button>
          <Button placeholder={'Create new user'} color='amber'>
              Create new user <i className='ml-2 fas fa-user-plus'></i>
          </Button>
        </div>
        

      </div>
    </div>
  )
}

export default NewUserPage
