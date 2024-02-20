// Watchlist.js
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

  const addToWatchlist = async (title, releaseDate, type) => {
    try {
      const response = await axios.post('http://localhost:3001/watchlist', {
        name: title,
        release_date: releaseDate,
        type: type,
      });

      setWatchlistItems([...watchlistItems, { id: response.data.id, name: title, release_date: releaseDate, type }]);
    } catch (error) {
      console.error('Error adding item to watchlist:', error.message);
    }
  };

  const removeFromWatchlist = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/watchlist/${id}`);
      console.log(`Item with ID ${id} removed from watchlist`);

      const updatedList = watchlistItems.filter((item) => item.id !== id);
      setWatchlistItems(updatedList);
    } catch (error) {
      console.error(`Error removing item with ID ${id} from watchlist:`, error.message);
    }
  };

  const handleAddToWatchlist = () => {
    addToWatchlist(newItemTitle, new Date().toDateString());
    setNewItemTitle('');
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
              {item.name} ({item.release_date})
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







