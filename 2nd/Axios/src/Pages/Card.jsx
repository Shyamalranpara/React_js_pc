import React from 'react'

const Card = ({ MoviesData }) => {
  return (
    <div >
      <h3>{MoviesData.Title}</h3>
      <p>{MoviesData.Year}</p>
      <img src={MoviesData.Poster} alt={MoviesData.Title} />
    </div>
  );
};


export default Card
