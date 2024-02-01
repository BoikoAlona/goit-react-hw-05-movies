import { useEffect, useState } from 'react';

import { FilteredMovieList } from 'components/FilteredMovieList/FilteredMovieList';
import { requestMoviesDetails } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

export const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  

  useEffect(() => {
    
    const getMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const detailsOfMovies = await requestMoviesDetails();
        setStatus(STATUSES.success);
        setMovies(detailsOfMovies);
      } catch (error) { }
    };
    getMovies();
  }, [movieId]);

    return (
            <div>
                {status === STATUSES.pending && <Loader />}
                <FilteredMovieList movies={movies} />
            </div>
        );
};