import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: '6758950845121a157509706cf14c21e8',
};

export const fetchMovies = async (query) => {
    const params = {
        query,
    };
    const { data } = await axios.get(`/search/movie`, { params });
    return data.results;
};

export const fetchPopular = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchCastMovie = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};