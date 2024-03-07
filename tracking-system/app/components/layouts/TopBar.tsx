
import React from 'react'
// import { useSession } from 'next-auth/react'
// import { data } from 'autoprefixer'
// import { Spinner } from '@material-tailwind/react'
import { get } from 'http'
import { getServerSession } from 'next-auth'
import { authProvider } from '../../api/auth/[...nextauth]/route'
import Link from 'next/link'


const TopBar = async () => {
    // const { data: session, status } = useSession()
    const session = await getServerSession(authProvider)



    return (
        <nav className='px-4 bg-gray-100 h-14 border-b flex'>
            <div className="grow flex h-full justify-start items-center">
                <button className='text-2xl'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            <div className='flex space-x-3 justify-center items-center h-full '>
                {session  && <span className='text-gray-500'>{session?.user?.name}</span>}
                <span>|</span>
                {session && <Link href='/api/auth/signout'> Sign Out </Link>}
                <button className='text-xl text-gray-600'>
                    <i className='fa fa-gear'></i>
                </button>
                {session && <img src={session?.user!.image!} alt="profile" className='h-8 w-8 rounded-full' />}
    
            </div>
        </nav>
    )
}

export default TopBar
