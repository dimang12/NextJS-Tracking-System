import React from 'react';
import User from '../interfaces/User';
import Link from 'next/link';
import {sort} from 'fast-sort';


// create a new interface to define the props
interface Props {
        sortOrder: string,
        order: string
}

const UserList = async ({sortOrder, order}: Props) => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // {next: {revalidate: 10}} // this will tell next.js to revalidate the data every 10 seconds
        )
    let users: User[] = await res.json()
    const ascDesc = order === 'asc' ? 'desc' : 'asc'

    // sort the users
    if(sortOrder !== undefined && sortOrder !== '') {
        if(order === 'asc') {
            users = sort(users).asc((user: User) => user[sortOrder as keyof User])
        } else {
            users = sort(users).desc((user: User) => user[sortOrder as keyof User])
        }
    }

    return (
        <div className='p-4'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className='text-center'>
                            <input type="checkbox" />
                        </th>
                        <th className='py-3 text-left'>ID</th>
                        <th className='text-left'>
                            <Link href={'/users?sortOrder=name&order=' + ascDesc} >Name</Link>
                        </th>
                        <th className='text-left'>
                            <Link href={'/users?sortOrder=email&order=' + ascDesc}>Email</Link>
                        </th>
                        <th className='text-left'>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id} className='border-b'>
                            <td className='text-center'>
                                <input value={user?.id} type="checkbox" />
                            </td>
                            
                            <td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;