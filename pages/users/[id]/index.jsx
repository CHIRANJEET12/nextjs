import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UserId = () => {
    const [user,setuserinfo] = useState([]);
    const router = useRouter();
    
    useEffect(() => {
        async function getuserbyid() {
            const id = router.query.id;
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            setuserinfo(await data.json()); 

        }
        getuserbyid();
    }, [router.query.id]);

    return (
        <div>
            <h1>User Details</h1>
            {user ? (
                <ul>
                    <li>ID: {user.id}</li>
                    <li>Name: {user.firstName} {user.lastName}</li>
                    <li>Email: {user.email}</li>
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserId;
