// Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../api';
import SearchResults from './SearchResults';
import '../Header.css'; // Import the CSS file for styling

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

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

  const handleTitleClick = () => {
    // Use navigate to navigate to the Browse page
    navigate('/');
    // Reload the page (optional, you can remove this line if you only want navigation)
    window.location.reload();
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          {/* Link to handle title click */}
          <Link to="/" onClick={handleTitleClick}>
            <img src="/logo-color.jpeg" alt="Cinebuddy Logo" className="logo" />
            <h1>Cinebuddy</h1>
          </Link>
        </div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search movies and TV shows..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <nav>
          <Link to="/">Browse</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/watchlist">Watchlist</Link>
        </nav>
      </div>
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </header>
  );
};

export default Header;

