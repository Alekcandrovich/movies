import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPopular } from '../../api/api';
import css from './home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchPopular();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(location);

  return (
    <div className={css.div_Home}>
      <h2 className={css.h2_Home}>ПОПУЛЯРНЫЕ ФИЛЬМЫ СЕГОДНЯ</h2>
      <ul className={css.ul_Home}>
        {movies.map(movie => (
          <li className={css.li_Home} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={css.poster_Home}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default Home;
