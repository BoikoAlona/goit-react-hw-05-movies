import { useEffect, useState } from 'react';

import { requestMoviesByName } from 'components/services/api';
import { STATUSES } from 'components/Utils/Constants';
import { Loader } from 'components/Loader/Loader';
import { TrendMoviesList } from 'components/TrendMoviesList/TrendMoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  const onSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === null) return;
    const fetchMoviesByQuery = async () => {
      try {
        setStatus(STATUSES.pending);
        const searchedMovies = await requestMoviesByName(query);
        setStatus(STATUSES.success);
        setMovies(searchedMovies);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    fetchMoviesByQuery();
  }, [query]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      {movies !== null && movies.length > 0 && (
        <TrendMoviesList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
