import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieDetails } from '../../api/api';
import Loader from '../../components/Loader/Loader';
import css from './movieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  const {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    runtime,
  } = movie;
  const genresList = genres.map(genre => genre.name).join(' ');
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const runtimeDisplay = `${hours}h ${minutes}m`;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const isAdditionalInfo =
    location.pathname.includes('cast') || location.pathname.includes('reviews');

  return (
    <>
      <div className={css.movie_detail_details}>
        <div className={css.movie_detail_image}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={css.movie_detail_info}>
          <h1>{title}</h1>
          <p className={css.movie_detail_genre}>
            <strong>Genre:</strong> {genresList}
          </p>
          <p>
            <strong>Release date:</strong> {release_date}
          </p>
          <p>
            <strong>Rating:</strong> {vote_average} / 10
          </p>
          <p>
            <strong>Runtime:</strong> {runtimeDisplay}
          </p>
          <p>
            <strong>Overview:</strong> {overview}
          </p>
          <button onClick={() => window.history.back()} className={css.goBack}>
            GO BACK
          </button>
        </div>
      </div>
      <div className={css.CastReviews}>
        <h4 className={css.titel_info}>ADDITIONAL INFORMATION</h4>
        {!isAdditionalInfo && (
          <div className={css.inform}>
            <div className={css.margin}>
              <NavLink
                to={`/movies/${movieId}/cast`}
                className={css.additionalButton}
              >
                View Cast
              </NavLink>
            </div>
            <div>
              <NavLink
                to={`/movies/${movieId}/reviews`}
                className={css.additionalButton}
              >
                View Reviews
              </NavLink>
            </div>
          </div>
        )}
        {isAdditionalInfo && (
          <div className={css.additionalInfo}>
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieDetails;
