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
          <div className={css.movieDetails}>
            <img src={movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : <p>No image</p>} alt = { movieDetails.title || movieDetails.name } width={300}></img>
          <div>
            <h2>{movieDetails.title || movieDetails.name}</h2>
            <p>User score: {Math.round(movieDetails.vote_average*10)}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(genre => {
                return `${genre.name}  `
              })}</p>
            </div>
            </div>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li className={css.additionalInfo}>Cast</li>
              <li className={css.additionalInfo}>Reviews</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
