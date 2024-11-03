const userpage = (props)=>{
    console.log(props);
    return (
        <div>
            <h1>Users (ssr)</h1>
            {
                props.data.users.map(user=><li key={user.id}>{user.firstName}</li>)
            }
        </div>
    )
}

export const getServerSideProps = async()=>{
    // console.log("a task is going on in a server");
    const data = await(await fetch('https://dummyjson.com/users')).json();
    return{
        props:{
            data,
        },
    };
};

export default userpage;