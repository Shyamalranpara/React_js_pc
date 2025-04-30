import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const MovieDetails = () => {
    // const params = useParams();
    // console.log(params)

    const movieData = useLoaderData();
    console.log(movieData)

    const {Actor, Poster, Title, Type, Plot, BoxOffice, imdbID}=movieData
  return (
    <div>
       <li className="hero-container hero-movie-continer">

        <div className="main-container">
            <div className="poster-container">
                <img src={Poster} className="poster" alt={Title} />
            </div>

            <div className="ticket-container">
                <div className="ticket_content">
    <h4 className="ticket__movie-title">{Title}</h4>
    <p>{Plot}</p>
    {/* <p className="ticket__current-price">Type:{pr}</p> */}
    <p className="ticket__current-price">Type:</p>
    <button className="ticket__buy-btn">Watch now</button>
                </div>
            </div>
        </div>
       </li>
    </div>
  )
}

export default MovieDetails
