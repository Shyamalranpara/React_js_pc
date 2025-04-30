import React, { useEffect, useState } from 'react'
import './PokemonCard.css'
const HowNotToFetchApi = () => {

    const [apiData,setApiData]=useState(null);

    const [loading,setloading]=useState(true);

    const [error,setError]=useState("");

    const API=  "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon=()=>{
        fetch(API)
        .then(response => response.json())
        .then(json => {
          setApiData(json)
          setloading(false)
        })

      .catch((err)=>{
        console.log(err)
        setloading(false)
      })
    }
    useEffect(()=>{
    fetchPokemon()        
    },[])
   
    console.log(apiData)

    if (loading) return <div><h1>Loading...</h1></div>;

    if(error) return <div><h1>Erorr:{error.message}</h1></div>
      return (
        <section className="pokemon-container">
        <header>
          <h1>Lets Catch Pokémons</h1>
        </header>
  
        <ul>
          <li className="pokemon-card">
            <figure>
              <img 
                src={apiData.sprites.other.dream_world.front_default} 
                alt={apiData.name} 
                className="pokemon-image-container"
              />
            </figure>
  
            <h2 className="pokemon-name">{apiData.name}</h2>

            <div className='grid-three-cols'>
            <p className='pokemon-info'>Height:<span>{apiData.height}</span></p>
            <p className='pokemon-info'>weight:<span>{apiData.weight}</span></p>
            <p className='pokemon-info'>speed:<span>{apiData.stats[5].base_stat}</span></p>
            </div>
           
          </li>
        </ul>
      </section>
          )
    }
  

export default HowNotToFetchApi
