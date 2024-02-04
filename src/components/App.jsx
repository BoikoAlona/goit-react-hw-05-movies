import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MovieDetails';

import { Layout } from './Layout/Layout';

export default function App() {
  

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
      </Routes>
      </Layout>
  );
};

