// TvShowList.js

import React from 'react';
import { Link } from 'react-router-dom';

const TvShowList = ({ tvShows }) => {
  return (
    <>
      {tvShows.map((tvShow) => (
        <div key={tvShow.id} className="tv-show-poster">
          <Link to={`/details/${tvShow.id}`}>
            <img src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`} alt={tvShow.name} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default TvShowList;
