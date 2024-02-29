import React from 'react'

interface Props {
    params: {
        id: string
    }
}

const UserDetailPage = ({params: {id} }: Props) => {
  return (
    <>
        <h1 className='font-bold px-4 py-3 border-b bg-white shadow-sm'>User Detail: {id}</h1>
        <div className='p-4'>
            <div className='flex items-center mb-4'>
                <div className='w-16 h-16 bg-gray-200 rounded-full mr-4'></div>
                <div>
                    <h2 className='font-bold'>John Doe</h2>
                    <p className='text-gray-600'>
                        <span className='mr-2'>
                            <svg
                            className='w-4 h-4 inline-block'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                            ></path>
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserDetailPage
