import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopular } from '../../api/api';
import css from './home.module.css'

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
      <h2 className={css.h2_Home}>Popular Movies Today</h2>
      <ul className={css.ul_Home}>
        {movies.map(movie => (
          <li className={css.li_Home} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location}}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;