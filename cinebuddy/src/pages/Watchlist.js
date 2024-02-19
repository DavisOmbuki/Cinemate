import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Watchlist = () => {
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState('');

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const response = await axios.get('http://localhost:3001/watchlist');
      setWatchlistItems(response.data);
    } catch (error) {
      console.error('Error fetching watchlist:', error.message);
    }
  };

  const addToWatchlist = async (title, releaseDate) => {
    try {
      const response = await axios.post('http://localhost:3001/watchlist', {
        title: title,
        release_date: releaseDate
      });

      setWatchlistItems([...watchlistItems, { id: response.data.id, title: title, release_date: releaseDate }]);
    } catch (error) {
      console.error('Error adding item to watchlist:', error.message);
    }
  };

  const removeFromWatchlist = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/watchlist/${id}`);
      const updatedList = watchlistItems.filter(item => item.id !== id);
      setWatchlistItems(updatedList);
    } catch (error) {
      console.error('Error removing item from watchlist:', error.message);
    }
  };

  const handleAddToWatchlist = () => {
    // You can add validation or additional checks here
    addToWatchlist(newItemTitle, new Date().toDateString());
    setNewItemTitle(''); // Clear the input field after adding
  };

  return (
    <div>
      <h2>Watchlist</h2>
      <input
        type="text"
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)}
        placeholder="Enter title"
      />
      <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
      
      {watchlistItems.length > 0 ? (
        <ul>
          {watchlistItems.map((item) => (
            <li key={item.id}>
              {item.title} ({item.release_date})
              <button onClick={() => removeFromWatchlist(item.id)}>Remove</button>
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
