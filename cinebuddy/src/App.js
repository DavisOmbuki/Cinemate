import React, { useState, useEffect } from 'react';

import { fetchPopularMovies, searchMovies } from './services/api'; // Import API functions
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      fetchPopularMovies().then(data => setMovies(data));
    } else {
      searchMovies(searchQuery).then(data => setMovies(data));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>CINEBUDDY</h1>
        <form onSubmit={handleSearch}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </header>

      {/* Content from Home Component */}
      <div>
        <h1>Popular Movies</h1>
        <h2>Discover the latest movies and TV shows</h2>
        {/* Add links as needed */}
        
      </div>
      
      <section className="movie-posters">
        {movies.map(movie => (
          <div className="movie-poster" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Cinebuddy</p>
      </footer>
    </div>
  );
}

export default App;


