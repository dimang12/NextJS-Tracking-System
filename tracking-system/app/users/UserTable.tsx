import React from 'react';
import User from '../interfaces/User';

const UserList = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // {next: {revalidate: 10}} // this will tell next.js to revalidate the data every 10 seconds
        )
      const users: User[] = await res.json()

    return (
        <div className='p-4'>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th className='text-center'>
                            <input type="checkbox" />
                        </th>
                        <th className='py-3 text-left'>ID</th>
                        <th className='text-left'>Name</th>
                        <th className='text-left'>Email</th>
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