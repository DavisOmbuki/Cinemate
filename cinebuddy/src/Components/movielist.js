import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../services/api';
import MovieCard from './moviecard';

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (searchQuery) {
        data = await searchMovies(searchQuery);
      } else {
        data = await fetchPopularMovies();
      }
      setMovies(data);
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

