import React, { useEffect, useState } from 'react'
import './Pokemon.css'
import { PokemonCard2 } from './PokemonCard2'

const Pokemon = () => {
  const [pokemon,setPokemon]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24"

  const fetchPokemon = async()=>{

    try{
      const res= await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailedPokemonData = data.results.map(async(curpokemon)=>{
        // console.log(curpokemon.url)

        const res = await fetch(curpokemon.url)
        const data = await res.json();
        console.log(data);
        return data;
      })
      console.log(detailedPokemonData);
      
      const detailedResponse = await Promise.all(detailedPokemonData);

      console.log(detailedResponse);
      setPokemon(detailedResponse)
      setLoading(false)
    } 

    catch (err){
      console.log(err)
      setLoading(false)
      setError(error)
    }

  }
  useEffect(()=>{

    fetchPokemon();

  },[])

  if(loading){
    return <div><h1>Loading...</h1></div>
  }

  if(error){
    return <div><h1>Error:{error.message}</h1></div>
  }
  return (
    <section>
    <header>
      <div className="pokemon-list"> {/* Apply grid styling here */}
        {pokemon.map((el) => (
          <PokemonCard2 key={el.id} pokemonData={el} />
        ))}
      </div>
    </header>
  </section>
  )
}

export default Pokemon
