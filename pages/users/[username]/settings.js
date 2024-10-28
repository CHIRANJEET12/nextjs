import { useRouter } from "next/router";

const page = ()=>{
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>this is the setting page from {router.query.username}.</h1>
        </div>
    )
}

export default page;