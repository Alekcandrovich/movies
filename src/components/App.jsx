import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

App.propTypes = {
  Layout: PropTypes.func.isRequired,
  Home: PropTypes.func.isRequired,
  Movies: PropTypes.func.isRequired,
  MovieDetails: PropTypes.func.isRequired,
  Cast: PropTypes.func.isRequired,
  Reviews: PropTypes.func.isRequired,
  Navigate: PropTypes.func.isRequired,
  Route: PropTypes.func.isRequired,
  Routes: PropTypes.func.isRequired,
};

export default App;
