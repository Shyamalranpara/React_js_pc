import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from "react-router-dom";
import Home from './Components/Router/Pages/Home';
import About from './Components/Router/Pages/About';
import Movie from './Components/Router/Pages/Movie';
import AppLayout from "./Components/Layout/AppLayout";
import "./App.css";
import ErrorPage from "./Components/Router/Pages/ErrorPage";
import GetApiData from "./Api/GetApiData";
import MovieDetails from "./Components/Ui/MovieDetails";
import GetMovieDetails from "./Api/GetMovieDetails";
import Contect, { contactData } from "./Components/Router/Pages/Contect";

function App() {

  /* old way */
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contect" element={<Contect />} />
  //     </>
  //   )
  // );

  /* new way */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children:[

        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetApiData
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: GetMovieDetails
        },
        {
          path: "/contect",
          element: <Contect />,
          action: contactData,
        }
        
        // {
        //   path: "*",
        //   element: <NotFound/>
        // },
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

{/* <BioProvider>
  <Home />
  <About/>
  <Service/>
</BioProvider> */}