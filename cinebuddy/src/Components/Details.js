// Details.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../api';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const Details = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Try fetching TV show details first
        const tvShowResponse = await axios.get(`${BASE_URL}/tv/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });

        setItemDetails(tvShowResponse.data);
      } catch (tvShowError) {
        console.error('Error fetching TV show details:', tvShowError.message);

        // If TV show details fetching fails, try fetching movie details
        try {
          const movieResponse = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
              api_key: API_KEY,
            },
          });

          setItemDetails(movieResponse.data);
        } catch (movieError) {
          console.error('Error fetching movie details:', movieError.message);
        }
      }
    };

    fetchItemDetails();
  }, [id]);

  const handleAddToWatchlist = async () => {
    try {
      if (itemDetails) {
        const watchlistItem = {
          id: itemDetails.id,
          name: itemDetails.name || itemDetails.title,
          release_date: itemDetails.first_air_date || itemDetails.release_date,
          type: itemDetails.name ? 'tv' : 'movie',
          overview: itemDetails.overview,
          vote_average: itemDetails.vote_average,
          runtime: itemDetails.runtime,
          genres: itemDetails.genres, // Assuming genres is an array in the response
          // Add other properties as needed
        };

        await axios.post('http://localhost:3001/watchlist', watchlistItem);

        setIsAdded(true);
      }
    } catch (error) {
      console.error('Error adding to watchlist:', error.message);
    }
  };

  return (
    <div>
      {itemDetails ? (
        <div>
          {/* Display movie or TV show poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${itemDetails.poster_path}`}
            alt={itemDetails.title || itemDetails.name}
          />
          {/* Display TV show name or movie title */}
          <h2>{itemDetails.name || itemDetails.title}</h2>
          {/* Display additional details based on the type */}
          {itemDetails.name ? (
            <>
              <p><strong>Overview:</strong> {itemDetails.overview}</p>
              <p><strong>Vote Average:</strong> {itemDetails.vote_average}</p>
              <p><strong>Runtime:</strong> {itemDetails.runtime} minutes</p>
              <p><strong>Genres:</strong> {itemDetails.genres.map((genre) => genre.name).join(', ')}</p>
            </>
          ) : (
            // Add movie-specific details here
            <MovieDetails movie={itemDetails} />
          )}
          {/* Add To Watchlist button */}
          <button onClick={handleAddToWatchlist} disabled={isAdded}>
            {isAdded ? 'Added to Watchlist' : 'Add To Watchlist'}
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;













