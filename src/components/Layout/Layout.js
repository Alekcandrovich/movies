import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from './layout.module.css';

const StyledLink = styled(NavLink)`
  color: #000000;
  &.active {
    color: #0000ff;
  }
`;

const Layout = () => {
  return (
    <>
      <header className={css.nav_header}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

Layout.propTypes = {
  NavLink: PropTypes.func.isRequired,
  Outlet: PropTypes.func.isRequired,
};

export default Layout;
