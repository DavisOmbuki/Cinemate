const apiKey = 'f89d8989e227e8e583e53424acfb6ffb';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const url = `${baseUrl}/movie/popular?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};



