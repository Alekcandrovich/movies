import { NavLink, Outlet } from 'react-router-dom';
import css from './layout.module.css'

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.Nav_list}>
          <li className={css.Nav_item}>
            <NavLink to='/'>
              <button type='button' className={css.btn_Home}>
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/movies'>
              <button type='button' className={css.btn_Movies}>
                Movies
              </button>
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