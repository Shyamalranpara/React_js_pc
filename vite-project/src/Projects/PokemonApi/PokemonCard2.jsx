import React from "react";
import "./Pokemon.css"; // Import the CSS file

export const PokemonCard2 = ({ pokemonData }) => {
  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{pokemonData.name}</h2>
      <p className="pokemon-id">ID: {pokemonData.id}</p>
      <figure className="pokemon-image-container">
        <img
          className="pokemon-image"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>

      <div>
      {
      pokemonData.types.map((curtyp) => curtyp.type.name).join(", ")
      }
      </div>

      <div  className="grid-tree-cols">
      <div className="pokemon-info">
        <span>Height:{pokemonData.height}</span>
      </div>
      </div>

      <div  className="grid-tree-cols">
      <div className="pokemon-info">
        <span>Weight:{pokemonData.weight}</span>
      </div>
      </div>

      <div  className="grid-tree-cols">
      <div className="pokemon-info">
        <span>Speed:{pokemonData.speed}</span>
      </div>
      </div>

      <div className="grid-tree-cols">
      <div className="pokemon-info">
      <p>{pokemonData.base_experience}</p>
      <span>Experience</span>
      </div>
      </div>
      
      <div className="pokemon-info">
      <p>{pokemonData.stats[1].base_stat}</p>
      <span>Attack</span>
      </div>
    </div>
  );
};
