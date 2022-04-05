import axios from "axios";

async function randomAdvice(){
    const response = await axios.get('https://api.adviceslip.com/advice')
    return response
}

async function randomSearch(input){
   const res = await axios.get(`https://api.adviceslip.com/advice/search/${input}`)
   return res
}


export {
    randomAdvice,
    randomSearch
}