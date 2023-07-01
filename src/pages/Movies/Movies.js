import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
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

  console.log(location);

  return (
    <div className={css.div_Movie}>
      <h2 className={css.h2_Movie}>Movies</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.label_search} htmlFor="search">
          Search for movies:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className={css.button_search} type="submit">
          Search
        </button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;