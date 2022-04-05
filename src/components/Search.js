import { useState, useEffect } from "react";
import { randomSearch } from "../services/constants";

function Search(){
   const [advices, setAdvices] = useState([])
   const [query, setQuery] = useState('')
//    const [msg, setMsg] = useState("")

   const handleOnChange = (e) => {
       e.preventDefault()
        setQuery(e.target.value)
   }

   async function handleOnClick(e){
       e.preventDefault()
       try {
           let res = await randomSearch(query)
           console.log(res)
           if(res.data.slips){
               setAdvices(res.data.slips)
           } 
        //    else{
        //       let info = res.data.message.text
        //       console.log(info)
        //        setMsg(info)
        //    }
       } catch (error) {
           console.log(error)
       }
   }

   useEffect(() => {
       handleOnClick()
   }, [])

    return(
        <div className="search">
           <input type="text" onChange={(e) => handleOnChange(e)} />
           <button onClick={(e) => handleOnClick(e)}>Search</button>
           {/* {
              ((advices.length <= 0) ? 
                 advices.map((advice, index) => {
                 return <p>{advice.advice}</p>
             }) : <<p>{msg}</p>>)
           } */}

           {
               advices.map((advice, index) => {
                return <p>{advice.advice}</p>
               })
           }
        </div>
    )
}

export default Search