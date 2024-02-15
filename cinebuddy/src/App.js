import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchPopularMovies, fetchMovieDetails, searchMovies } from './services/api';
import './App.css';

import Navigation from './Components/navbar';
import MovieDetails from './Components/moviedetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      const data = await fetchPopularMovies();
      setMovies(data);
    } else {
      const data = await searchMovies(searchQuery);
      setMovies(data);
    }
  };

  const handleMovieDetails = async (movieId) => {
    const details = await fetchMovieDetails(movieId);
    setSelectedMovie(details);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>CINEBUDDY</h1>
          <Navigation setMovies={setMovies} />
          <form onSubmit={handleSearch}>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="moviePostersContainer">
                  {movies.map(movie => (
                    <div key={movie.id} onClick={() => handleMovieDetails(movie.id)} className="moviePoster">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                      <h3>{movie.title}</h3>
                      
      
                      <p>{movie.overview}</p>
                      <p>Release Date: {movie.release_date}</p>
                    </div>
                  ))}
                </div>
              }
            />
            <Route path="/movie/:id" element={<MovieDetails selectedMovie={selectedMovie} />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Cinebuddy</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


;














