'use client'

import React from 'react'
import Link from 'next/link'

const LeftBar = () => {
  return (
    <aside className='w-72 bg-indigo-700'>
    <nav className='p-4'>
      <h1 className='text-white text-2xl font-bold'>Tracking System</h1>
      <ul className='mt-4 space-y-2'>
        <li>
          <Link href='/' className='text-white'>
            <i className='fas fa-tachometer-alt'></i>
            <span className='ms-3'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href='/projects/' className='text-white'>
            <i className='fas fa-project-diagram'></i>
            <span className='ms-3'>Projects</span>
          </Link>
        </li>
        <li>
          <Link href='/users' className='text-white'>
            <i className='fas fa-users'></i>
            <span className='ms-3'>Users</span>
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
  )
}

export default LeftBar
