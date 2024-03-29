import { useEffect, useState } from 'react';

import { TrendMoviesList } from 'components/TrendMoviesList/TrendMoviesList';
import { requestTrendMovies } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      <TrendMoviesList movies={movies} />
    </div>
  );
};

export default HomePage;