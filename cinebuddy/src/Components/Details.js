// Details.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../api';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams(); // Use useParams hook to get route parameters
  const [itemDetails, setItemDetails] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Fetch the movie or TV show details using the ID from the route
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });

        setItemDetails(response.data);
      } catch (error) {
        console.error('Error fetching details:', error.message);
      }
    };

    fetchItemDetails();
  }, [id]); // Include id in the dependency array

  const handleAddToWatchlist = async () => {
    try {
      if (itemDetails) {
        // Add the item to the watchlist in the database
        await axios.post('http://localhost:3001/watchlist', itemDetails);

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
          {/* Details content here */}
          <h2>{itemDetails.title}</h2>
          <p>{itemDetails.overview}</p>
          <p>Release Date: {itemDetails.release_date}</p>

          {/* "Add To Watchlist" button */}
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




