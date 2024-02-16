// MovieDetails.js
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
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;



