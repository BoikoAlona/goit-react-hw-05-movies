import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestMoviesDetails } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';


import css from 'components/App.module.css';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        setStatus(STATUSES.pending);
        const movieData = await requestMoviesDetails(movieId);
        setStatus(STATUSES.success);
        setMovieDetails(movieData);
      } catch (error) {}
    };
    getMoviesDetails();
  }, [movieId]);

  return (
    <div>
      <p>Go back</p>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <div>
          <img alt={movieDetails}></img>
          <div>
            <p>{movieDetails}</p>
          </div>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>Cast</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
