import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { requestMoviesByName } from 'components/services/api';
import { STATUSES } from 'components/Utils/Constants';
import { Loader } from 'components/Loader/Loader';
import { TrendMoviesList } from 'components/TrendMoviesList/TrendMoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchInput.value;
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
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
  }, [searchParams]);

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
