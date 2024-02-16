import React from 'react';

const TvShowDetails = ({ tvShow }) => {
  return (
    <div className="tv-show-details">
      <h2>{tvShow.name}</h2>
      <p>{tvShow.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TvShowDetails;