import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import css from './cast.module.css';

const API_KEY = '6758950845121a157509706cf14c21e8';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
      setCast(response.data.cast);
    };

    fetchCast();
  }, [movieId]);  

  return (
    <div className={css.Cast}>
      <h2 className={css.Cast_titel}>Cast</h2>
      <ul className={css.Сast_list}>
        {cast.map(actor => (
          <li key={actor.id} className={css.Сast_item}>
            <div>
              {actor.profile_path && (
                <img
                  className={css.Actor_image}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name}'s profile`}
                />
              )}
            </div>
            <div className={css.Actor_name}>{actor.name}</div>
          </li>
        ))}
      </ul>

      <Link to={`/movies/${movieId}`} className={css.goBack}>
        Go back
      </Link>
    </div>
  );
};

export default Cast;