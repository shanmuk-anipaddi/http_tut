import React from "react";

const MovieItem = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li key={movie.id}>
              <div>Id: {movie.id}</div>
              <div>Name:{movie.movieName}</div>
              <div>Description : {movie.descirption}</div>
              <div>Release Date :{movie.Realease_date}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieItem;
