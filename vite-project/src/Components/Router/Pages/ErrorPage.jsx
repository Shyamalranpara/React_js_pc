import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const Error = useRouteError();

  const navigate=useNavigate();

  const HandleGoBack=()=>{
    // navigate(-1)
    navigate("/")
  }
    if(Error.status === 404){
       return (
            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" 
                alt="404 Not Found"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            <h1>Look Like You're lost</h1>

          
          <h3>The Page You Are Looking For Not Available</h3>
            
            {/* <NavLink to="/" >

          <button>
            
        Go Back To HomePage

          </button>

            </NavLink> */}

            {/* usenavigate */}

            <button onClick={HandleGoBack}>

        Go Back To HomePage

            </button>
            </div>
            
          );
    } console.log(Error)


  return <div><h1>the page dose not exist Something went wrong</h1> </div>
  
}

export default ErrorPage
