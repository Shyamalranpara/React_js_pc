import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Ui/Card';

const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <>
     <ul style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem'
}} className='container'>
        {
          moviesData.Search.map((el) => (
            <Card key={el.imdbID} el={el} />
          ))
        }
      </ul>
    </>
  );
};

export default Movie;
