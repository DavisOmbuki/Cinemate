// MovieList.js

import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-poster">
          <Link to={`/details/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title || movie.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;







