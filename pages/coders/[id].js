import React from "react";
import { useRouter } from "next/router";


export default function Detail(){
    const router = useRouter();
    console.log(router.query.id);

    function handleClick(){
        router.push('/')
    }
    return (
        <div>
            <h1>Detail task</h1>
            <h1>
                ==== {router.query.id}
            </h1>
            <button onClick={handleClick}>
                Go to add to list
            </button>
        </div>
    )
}