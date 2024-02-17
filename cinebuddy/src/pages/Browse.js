// Browse.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../Components/MovieList';
import { API_KEY, BASE_URL } from '../api';

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch random movies
    axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Browse</h2>
      {movies && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};

export default Browse;



