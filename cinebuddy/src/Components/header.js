import React, { useState } from 'react';

const Header = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <header>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search for movies or TV shows" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;

