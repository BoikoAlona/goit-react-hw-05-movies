import { Layout } from 'components/Layout/Layout';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MovieCast } from 'components/MovieCast/MovieCast';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Route>
      </Route>
      </Routes>
  );
}
