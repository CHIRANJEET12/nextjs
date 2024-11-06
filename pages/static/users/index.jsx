import { useSession,signIn,signOut } from "next-auth/react";


const UserPage = (props)=>{
    const session = useSession();
    if(session.data===null){
        return <button onClick={signIn}>Login</button>
    }
    console.log(session);
    return (
        <div>
            <h1>Userpage (ssg)</h1>
            {
                props.data.users.map(user=><li key={user.id}>{user.firstName}</li>)
            }
        </div>
    );
};

export const getStaticProps = async()=>{
    const data = await(await fetch('https://dummyjson.com/users')).json();
    return{
        props:{
            data,
        },
    };
}

export default UserPage;