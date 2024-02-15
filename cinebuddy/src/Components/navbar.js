import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies, fetchTrendingMovies, fetchTrendingTvShows } from '../services/api';

function Navigation({ setMovies }) {
  const handleBrowse = async () => {
    const popularMovies = await fetchPopularMovies();
    setMovies(popularMovies);
  };

  const handleTrendingMovies = async () => {
    const trendingMovies = await fetchTrendingMovies();
    setMovies(trendingMovies);
  };

  const handleTrendingTvShows = async () => {
    const trendingTvShows = await fetchTrendingTvShows();
    setMovies(trendingTvShows);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/" onClick={handleBrowse}>Browse</Link></li>
        <li><Link to="/movies" onClick={handleTrendingMovies}>Movies</Link></li>
        <li><Link to="/tvshows" onClick={handleTrendingTvShows}>TV Shows</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;

