import { useEffect, useRef, useState } from 'react';
import { NavLink, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { requestMoviesDetails } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';
import { MovieCast } from 'components/MovieCast/MovieCast';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';

import image from 'components/Image/vecteezy_icon-image-not-found-vector_.jpg';
import css from 'components/App.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

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
      <Link to={backLinkRef.current}>Go back</Link>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <div>
          <div className={css.movieDetails}>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : image
              }
              alt={movieDetails.title || movieDetails.name}
              width={300}
            ></img>
            <div>
              <h2>{movieDetails.title || movieDetails.name}</h2>
              <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>
                {movieDetails.genres.map(genre => {
                  return `${genre.name}  `;
                })}
              </p>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
            <div>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="cast"
                end
              >
                Cast
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="reviews"
                end
              >
                Reviews
              </NavLink>
            </div>
            <div>
              <Routes>
                <Route path="cast" element={<MovieCast />}></Route>
                <Route path="reviews" element={<MovieReviews />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
