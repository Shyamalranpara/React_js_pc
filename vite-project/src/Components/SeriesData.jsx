import React from 'react';
import styled from "styled-components";

const SeriseData = ({ data }) => {
    const { img_url, name, rating, description, cast, watch_url } = data;


// const Sbutton = styled.button({
//     padding:"1.2rem 2.4rem",
//     border:"none",
//     fontSize:"1.6rem",
//     backgroundColor:"var(--btn-hover-bg-color)",
//     color:"var(--bg-color)"}) /* styled componetns whith object */


/* syled componets with templet litral */

const Sbutton = styled.button`
padding:1.2rem 2.4rem;
border:none;
font-size:1.6rem;
color: var(--btn-color);
fontweight: bold;
course:pointer;
background-color: ${(props)=>props.rating >8.5 ?"#7dcea0":"#f7dc6f" }
`;

const ratingclass = rating > 8.5 ? "super_hit" : "average"; 

    return (
        <li className="card">
            <img src={img_url} alt={name} />

            <div className="card-content">
                <h2 className="card-heading">Name: {name}</h2>

                <p>
                    Rating:{" "}
                    <span className={`rating ${ratingclass}`}>
                        {rating}
                    </span>
                </p>

                <p>Description: {description}</p>
                <p>Cast: {cast}</p>

                <a  href={watch_url} target="_blank" rel="noopener noreferrer">
                    <Sbutton rating={rating}>Watch Now</Sbutton>
                </a>
            </div>
        </li>
    );
};

export default SeriseData;
