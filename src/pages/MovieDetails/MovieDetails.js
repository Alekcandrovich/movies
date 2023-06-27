import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link, Outlet, useParams } from 'react-router-dom';
import css from './movieDetails.module.css';

const API_KEY = '6758950845121a157509706cf14c21e8';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
      return (
        <div>Loading...</div>
      );
  }

  const { poster_path, title, overview, release_date, vote_average, genres, runtime } = movie;
  const genresList = genres.map(genre => genre.name).join(' ');
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const runtimeDisplay = `${hours}h ${minutes}m`;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

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
          <Link to={`/`} className={css.goBack}> Go back</Link>
        </div>
      </div>
      <div className={css.CastReviews}>
        <h4 className={css.titel_info}>Additional information</h4>
        <div className={css.inform}>
          <div className={css.margin}>
            <NavLink to={`/movies/${movieId}/cast`}>
              View Cast
            </NavLink>
          </div>
          <div>
            <NavLink to={`/movies/${movieId}/reviews`}>
               View Reviews
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;