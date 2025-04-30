import React from 'react'

const GetMovieDetails = async({params}) => {

console.log(params)

const id = params.movieID;

try{
   const res = await fetch(`https://www.omdbapi.com/?i=${id}=${import.meta.env.VITE_API_KEY}`)
   const data = res.json() ;
   console.log(res)
   return data;
}
catch(error){
    console.log(error)
}
  return (
    <div>
      
    </div>
  )
}

export default GetMovieDetails
