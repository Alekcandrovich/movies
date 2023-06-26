import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './home.module.css'

const API_KEY = '6758950845121a157509706cf14c21e8';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className={css.div_Home}>
      <h2 className={css.h2_Home}>Popular Movies Today</h2>
      <ul className={css.ul_Home}>
        {movies.map(movie => (
          <li className={css.li_Home} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;