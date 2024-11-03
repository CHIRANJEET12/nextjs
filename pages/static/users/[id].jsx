const useridpage = (props)=>{
    return (
        <div>
            <h1>
                id page of {props.data.firstName}.
            </h1>
        </div>
    );
};

export const getStaticPaths = async()=>{
    const data = await(await fetch(`https://dummyjson.com/users`)).json();
    const alluserid = data.users.map((user) =>user.id);

    // console.log("alluserid",alluserid);

    return {
        paths:alluserid.map((useridd)=>({params:{id:`${useridd}`}})),
        fallback:false,
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const data = await(await fetch(`https://dummyjson.com/users/${id}`)).json();
    return{
        props:{
            data,
        },
    };
}

export default useridpage;