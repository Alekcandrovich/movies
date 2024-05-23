import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '6758950845121a157509706cf14c21e8',
};

export const fetchMovies = async query => {
  const params = {
    query,
  };
  const { data } = await axios.get(`/search/movie`, { params });
  return data.results;
};

export const fetchPopular = async (count = 18) => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: {
      page: 1,
      per_page: count,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchCastMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

fetchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};
fetchPopular.propTypes = {
  data: PropTypes.object.isRequired,
};
fetchMovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};
fetchCastMovie.propTypes = {
  movieId: PropTypes.number.isRequired,
};
fetchMovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
