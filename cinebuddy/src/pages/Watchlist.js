// Watchlist.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Watchlist = () => {
  const [watchlistItems, setWatchlistItems] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        // Fetch watchlist items from the server
        const response = await axios.get('http://localhost:3001/watchlist');
        setWatchlistItems(response.data);
      } catch (error) {
        console.error('Error fetching watchlist:', error.message);
      }
    };

    fetchWatchlist();
  }, []); // Empty dependency array to fetch watchlist on component mount

  return (
    <div>
      <h2>Watchlist</h2>
      {watchlistItems.length > 0 ? (
        <ul>
          {watchlistItems.map((item) => (
            <li key={item.id}>
              {item.title} ({item.release_date})
            </li>
          ))}
        </ul>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default Watchlist;
