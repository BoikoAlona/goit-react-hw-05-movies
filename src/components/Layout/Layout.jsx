import React from 'react';
import { NavLink } from 'react-router-dom';

import css from 'components/App.module.css';

export const Layout = ({ children }) => {
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
      <main>{children}</main>
    </div>
  );
};
