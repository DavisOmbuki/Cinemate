import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Home = () => {
  return (
    <div>
      <h1>Welcome to Movie Hub</h1>
      <p>Discover the latest movies and TV shows</p>

      <Link to="/browse">Browse Popular Movies</Link>
      <Link to="/movies">View Random Movies</Link>
      <Link to="/tvshows">Explore TV Shows</Link>

      {/* You can add more content or styling as needed */}
    </div>
  );
};

export default Home;

