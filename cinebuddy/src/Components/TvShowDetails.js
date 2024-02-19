import React from 'react';

const TvShowDetails = ({ tvShow }) => {
  return (
    <div className="tv-show-details">
      <h2>{tvShow.name}</h2>
      <p>{tvShow.overview}</p>
      <p><strong>First Air Date:</strong> {tvShow.first_air_date}</p>
      <p><strong>Popularity:</strong> {tvShow.popularity}</p>
      <p><strong>Number of Seasons:</strong> {tvShow.number_of_seasons}</p>
      <p><strong>Genres:</strong> {tvShow.genres.map(genre => genre.name).join(', ')}</p>
      {/* Add more details */}
    </div>
  );
};

export default TvShowDetails;
