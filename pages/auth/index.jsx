import { useSession,signIn,signOut } from "next-auth/react";

const userAuth = ()=>{

    const session = useSession();
    console.log(session);
    if(session.data===null){
        return <button onClick={signIn}>Login</button>
    }

    return(
        <div>
            <h1>Auth-Page</h1>
            <button onClick={signOut}>log-out</button>
        </div>
    )
}

export default userAuth;