import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../api/api';
import css from './movies.module.css';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies(searchParams.get('textQuery'));
        setSearchResults(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (searchTerm) {
      setSearchParams({ textQuery: searchTerm });
      setSearchTerm('');
    } else {
      setSearchResults([]);
      setSearchParams({});
    }
  };

  return (
    <div className={css.div_Movie}>
      <h2 className={css.h2_Movie}>ПОИСК ФИЛЬМА</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.label_search} htmlFor="search">
          Введите название фильма:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className={css.button_search} type="submit">
          ПОИСК
        </button>
      </form>
      <ul className={css.ul_Movie}>
        {searchResults.map(movie => (
          <li className={css.li_Movie} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.link_Movie}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={css.poster_Movie}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired,
  searchParams: PropTypes.object.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Movies;
