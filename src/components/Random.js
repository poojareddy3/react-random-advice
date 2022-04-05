import { randomAdvice } from "../services/constants";
import { useState, useEffect } from "react";

function Random(){
    const [counsel, setCounsel] = useState("")

    async function handleClick(){
        const answer = await randomAdvice()
        console.log(answer)
        setCounsel(answer.data.slip.advice)
    }

    useEffect(() => {
         handleClick()
    },[])

    return(
        <div className="random">
           <h1>Random Advice</h1>
           <button onClick={() => handleClick()}>Click for Random Advice</button>
           <p>{counsel}</p>
        </div>
    )
}

export default Random