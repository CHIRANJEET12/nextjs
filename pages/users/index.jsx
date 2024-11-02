import { useEffect, useState } from 'react';
import Link from 'next/link';

const UserPage = () => {
    const [users, setUsers] = useState([]);

    console.log("users",users);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <Link  href={`/users/${user.id}`} key={user.id}>{user.firstName} {user.lastName} <br /></Link>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
