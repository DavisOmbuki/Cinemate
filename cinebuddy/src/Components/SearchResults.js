// SearchResults.js
import React from 'react';

import MovieList from './MovieList'; // Assuming you have a MovieList component

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {results && results.length > 0 ? (
        <MovieList movies={results.map((result) => ({ ...result, id: result.id }))} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

