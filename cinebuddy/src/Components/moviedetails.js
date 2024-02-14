import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api'; // Assuming you have an API function to fetch movie details

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  const { title, overview, release_date, poster_path } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      {/* You can display additional movie details here */}
    </div>
  );
};

export default MovieDetails;

