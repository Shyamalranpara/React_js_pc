import React from 'react'

const Register = () => {
    const name="Squid Game";
    const rating="8.5/10";
    const age = 19;
  return (
    <div>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fy7LWJsupuYjxljKepPuPsRBAi6HW89DeA&s" alt="" />
      <h2>Name: {name}</h2>
      <h2>Rating:{rating}</h2>
      <h2>{gonre()}</h2>
      <h2>gen: {gonre2()}</h2>
      <button>{age >= 18 ? "Watch now" : "Not available"}</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque quo nostrum ut illum exercitationem asperiores, illo error dignissimos culpa quidem excepturi nihil rerum officiis at placeat incidunt ipsa tenetur?</p>


    </div>
  )

}


 export const Netflix = () => {
    const name="Squid Game";
    const rating="9.5/10";
    let age=16;

    if(age < 18){
        return(
            <div>
                <h2>Netflix</h2>
                <h2>Name: {name}</h2>
                <h2>Rating:{rating }</h2>
                <h2>{gonre()}</h2>
                <h2>gen: {gonre2()}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fy7LWJsupuYjxljKepPuPsRBAi6HW89DeA&s" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque quo nostrum ut illum exercitationem asperiores, illo error dignissimos culpa quidem excepturi nihil rerum officiis at placeat incidunt ipsa tenetur?</p>
                <button>not available</button>
            </div>
        )
    }


    else{

    return(
        <div>
            <h2>Netflix</h2>
            <h2>Name: {name}</h2>
            <h2>Rating:{rating }</h2>
            <h2>{gonre()}</h2>
            <h2>gen: {gonre2()}</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fy7LWJsupuYjxljKepPuPsRBAi6HW89DeA&s" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque quo nostrum ut illum exercitationem asperiores, illo error dignissimos culpa quidem excepturi nihil rerum officiis at placeat incidunt ipsa tenetur?</p>
            <button>Watch now</button>
        </div>
    )
    }

}

const gonre=()=>{
    const gon="romcom";
   
    return(
        <div>
            <h2>Genre: {gon}</h2>
        </div>
    )
}

const gonre2=()=>{
    const gon="romcom2";
    return(
        <>
       <span>gonre2 </span>
       </>
    )
}
export default Register
