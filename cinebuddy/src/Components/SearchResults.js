// SearchRequest.js

import React from 'react';

import MovieList from './MovieList';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {results && results.length > 0 ? (
        <MovieList movies={results.map((result) => ({ ...result, id: result.id }))} />
      ) : (
        <p> Results not found...</p>
      )}
    </div>
  );
};

export default SearchResults;

