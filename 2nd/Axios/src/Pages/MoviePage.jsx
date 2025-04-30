import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Card from './Card';
import { getMovie } from './GetService';

const MoviePage = () => {
  const [data, setData] = useState([]);

//   const API = "http://www.omdbapi.com/?i=tt3896198&apikey=dee4a855&s=titanic&page=1"; 

  const getMoviesData = async () => {
    console.log("Fetching movies...");
    try {
      const res = await getMovie();
      console.log("Response:", res.data.Search);
      setData(res.data.Search);
    } catch (err) {
      console.error("Error fetching movies:", err.message);
      console.error(err.response.status);
      console.error(err.response.data);
      
      
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((el) => (
        <Card key={el.imdbID} MoviesData={el} />
      ))}
    </div>
  
  
  );
};

export default MoviePage;
