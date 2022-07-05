import React from "react";

const MovieItem = (props) => {
  console.log("props : ", props.movies);

  return (
    <div>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li key={movie.id}>
              <div>Id: {movie.id}</div>
              <div>Name:{movie.name}</div>
              <div>Description : {movie.desc}</div>
              <div>Release Date :{movie.release_date}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieItem;
