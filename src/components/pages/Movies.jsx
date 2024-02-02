import { useEffect, useState } from 'react';

import { TrendMoviesList } from 'components/TrendMoviesList/TrendMoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { requestMoviesByName } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  console.log(setQuery);

  const onSubmit = value => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const filteredMovies = await requestMoviesByName();
        setStatus(STATUSES.success);
        setMovies(prevState => [...prevState, ...filteredMovies]);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getMovies();
  }, [query]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      <TrendMoviesList movies={movies} />
    </div>
  );
};