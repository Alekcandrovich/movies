// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { fetchCastMovie } from '../../api/api';
// import css from './cast.module.css';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const fetchCast = async () => {
//       try {
//         const castData = await fetchCastMovie(movieId);
//         setCast(castData);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCast();
//   }, [movieId]);

//   return (
//     <div className={css.Cast}>
//       <h2 className={css.Cast_titel}>Cast</h2>
//       <ul className={css.Сast_list}>
//         {cast.map(actor => (
//           <li key={actor.id} className={css.Сast_item}>
//             <div>
//               {actor.profile_path && (
//                 <img
//                   className={css.Actor_image}
//                   src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
//                   alt={`${actor.name}'s profile`}
//                 />
//               )}
//             </div>
//             <div className={css.Actor_name}>{actor.name}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Cast.propTypes = {
//   movieId: PropTypes.number.isRequired,
//   cast: PropTypes.array.isRequired,
// };

// export default Cast;






import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCastMovie } from '../../api/api';
import css from './cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await fetchCastMovie(movieId);
        setCast(castData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.Cast}>
      <h2 className={css.Cast_title}>Cast</h2>
      <ul className={css.Cast_list}>
        {cast.map(actor => (
          <li key={actor.id} className={css.Cast_item}>
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
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
