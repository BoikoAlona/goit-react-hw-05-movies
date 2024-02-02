import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MovieDetails';

import css from 'components/App.module.css';

export default function App() {
  

  return (
    <div>
      <header>
        <NavLink className={({isActive}) => `${css.navLink} ${isActive ? css.active: ''}`} to="/">Home</NavLink>
        <NavLink className={({isActive}) => `${css.navLink} ${isActive ? css.active: ''}`} to="/movies">Movies</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        </Routes>
      </main>
    </div>
  );
};

