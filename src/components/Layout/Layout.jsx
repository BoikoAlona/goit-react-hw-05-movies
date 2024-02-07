import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from 'App.module.css';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/movies"
          end
        >
          Movies
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
