import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
