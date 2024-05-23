import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from './layout.module.css';

const ButtonLink = styled(NavLink)`
  display: inline-block;
  padding: 5px 20px;
  margin: 10px;
  font-size: 14px;
  color: white;
  background-color: darkslategrey;
  border: none;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: black;
  }

  &.active {
    background-color: blue;
    color: white;
  }
`;

const Layout = () => {
  return (
    <>
      <header className={css.nav_header}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <ButtonLink to="/" exact>
              ПОПУЛЯРНЫЕ ФИЛЬМЫ
            </ButtonLink>
          </li>
          <li className={css.nav_item}>
            <ButtonLink to="/movies">ПОИСК ФИЛЬМОВ</ButtonLink>
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
