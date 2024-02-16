// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../api';
import SearchResults from './SearchResults';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header>
      <h1>Cinebuddy</h1>
      <nav>
        <Link to="/">Browse</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
      </nav>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search movies and TV shows..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </header>
  );
};

export default Header;








