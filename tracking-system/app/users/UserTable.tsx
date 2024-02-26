import React from 'react';
import User from '../interfaces/User';

const UserList = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // {next: {revalidate: 10}} // this will tell next.js to revalidate the data every 10 seconds
        )
      const users: User[] = await res.json()

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;