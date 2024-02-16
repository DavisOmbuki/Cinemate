// TvShows.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../api';
import TvShowList from '../Components/TvShowList';

const TvShows = () => {
  const [trendingTvShows, setTrendingTvShows] = useState([]);

  useEffect(() => {
    const fetchTrendingTvShows = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
        );
        setTrendingTvShows(response.data.results);
      } catch (error) {
        console.error('Error fetching trending TV shows:', error.message);
      }
    };

    fetchTrendingTvShows();
  }, []);

  return (
    <div>
      <h2>Trending TV Shows</h2>
      <div className="tv-show-list">
        <TvShowList tvShows={trendingTvShows} />
      </div>
    </div>
  );
};

export default TvShows;

