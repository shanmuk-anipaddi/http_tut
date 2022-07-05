import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./AddMovie";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const [moviesGot, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [errorState, setError] = useState(null);

  useEffect(() => {
    //const timer = setInterval(() => {
    fetchMovieshandler();
    //}, 5000);

    //return clearTimeout(timer);
  }, []);

  let content = "";

  const fetchMovieshandler = async () => {
    // try{
    setisLoading(true);

    await fetch(
      "https://test-react-http-14756-default-rtdb.firebaseio.com/movies.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        const loadedMovies = [];
        for (const key in data) {
          //console.log(key);
          loadedMovies.push({
            id: key,
            name: data[key].mName,
            desc: data[key].desc,
            release_date: data[key].release_date,
          });
        }
        //console.log('MoviesList : ',loadedMovies)
        // const movies = data.results.map((movie) => {
        //   return {
        //     id: movie.episode_id,
        //     movieName: movie.title,
        //     descirption: movie.opening_crawl,
        //     Realease_date: movie.release_date,
        //   };
        // });
        //console.log(movies);
        setMovieList(loadedMovies);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError("Error Occured !");
      });
    // }catch(error){

    // }
  };

  //console.log("MoviesGot : ",moviesGot.length);

  if (!isLoading && moviesGot.length > 0) {
    content = <MovieItem movies={moviesGot} />;
  }
  if (isLoading && !errorState) {
    content = <p>Movies are Loading</p>;
  }
  if (errorState) {
    content = <p>{errorState}</p>;
  }
  console.log("Content : ", content);
  const addNewMovieHandler = (newMovie) => {
    //console.log("Movie List : ", newMovie);
    const pushMovie = fetch(
      "https://test-react-http-14756-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <AddMovie addNewMovie={addNewMovieHandler} />
      <button onClick={fetchMovieshandler}>Fetch Movies</button>
      <div>{content}</div>
    </div>
  );
};
export default MoviesList;
