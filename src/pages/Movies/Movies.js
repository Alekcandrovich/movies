import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './movies.module.css';

const API_KEY = '6758950845121a157509706cf14c21e8';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (searchTerm) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
 setSearchResults(response.data.results);
      setSearchTerm('');
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className={css.div_Movie}>
      <h2 className={css.h2_Movie}>Movies</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.label_search} htmlFor='search'>
          Search for movies:
        </label>
        <input
          type='text'
          id='search'
          value={searchTerm}
          onChange={handleChange}
        />
        <button type='submit'>
          Search
        </button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;