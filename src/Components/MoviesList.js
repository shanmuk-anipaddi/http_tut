import React, { useState } from "react";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const [moviesGot, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [errorState,setError] = useState(null);
  let content = '';
  const fetchMovieshandler = async () => {
   // try{
      setisLoading(true);
      await fetch("https://swapi.dev/api/films")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const movies = data.results.map((movie) => {
            return {
              id: movie.episode_id,
              movieName: movie.title,
              descirption: movie.opening_crawl,
              Realease_date: movie.release_date,
            };
          });
          //console.log(movies);
          setMovieList(movies);
          setisLoading(false);
        }).catch((error)=>{
          console.log(error);
          
          setError('Error Occured !');
        });
    // }catch(error){

    // }
   
  };

  if(!isLoading && moviesGot.length > 0 ){
    content = <MovieItem movies={moviesGot} />
  }
  if(isLoading && !errorState){
    content = <p>Movies are Loading</p>
  }
  if(errorState ){
    content =  <p>{errorState}</p>
  }

  return (
    <div>
      <button onClick={fetchMovieshandler}>Fetch Movies</button>
      <div>
        {content}
      </div>
    </div>
  );
};
export default MoviesList;