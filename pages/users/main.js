import { useRouter } from "next/router";

const ipage =()=>{
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>welcome user.</h1>
        </div>
    )
}

export default ipage;