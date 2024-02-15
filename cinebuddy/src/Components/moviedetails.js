import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchCast } from '../services/api'; // Update with the API function to fetch cast details

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetchMovieDetails(movieId);
      const castData = await fetchCast(movieId); // Assuming this function fetches the cast details
      setMovie(movieData);
      setCast(castData);
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

      <h3>Cast:</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
      {/* You can add more details or styling as needed */}
    </div>
  );
};

export default MovieDetails;


