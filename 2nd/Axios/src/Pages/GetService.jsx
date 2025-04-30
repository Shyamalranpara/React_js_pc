import axios from 'axios'

   const api = axios.create({
    baseURL: 
    "http://www.omdbapi.com/"
})

export const getMovie=()=>{
    return api.get("?i=tt3896198&apikey=dee4a855&s=titanic&page=1")
}
  


