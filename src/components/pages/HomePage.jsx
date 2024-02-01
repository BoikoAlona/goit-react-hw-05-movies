import { useEffect, useState } from 'react';

import { TrendMoviesList } from 'components/TrendMoviesList/TrendMoviesList';
import { requestTrendMovies } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  console.log(setQuery);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getTrandMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const dayTrandMovies = await requestTrendMovies();
        setStatus(STATUSES.success);
        setMovies(prevState => [...prevState, ...dayTrandMovies]);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getTrandMovies();
  }, [query]);

  return (
    <div>
      <h1>Tranding today</h1>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      <TrendMoviesList movies={movies} />
    </div>
  );
};
