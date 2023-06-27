import { NavLink, Outlet } from 'react-router-dom';
import css from './layout.module.css'

const Layout = () => {
  return (
    <>
      <header className={css.nav_header}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <NavLink to="/" className={css.nav_activ}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.nav_activ}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;