import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from 'App.module.css';

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
      <main><Outlet /></main>
    </div>
  );
};