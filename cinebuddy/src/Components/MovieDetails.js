import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    // Handle the case where movie is undefined or null
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Vote Average:</strong> {movie.vote_average}</p>
      <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
    </div>
  );
};

export default MovieDetails;
