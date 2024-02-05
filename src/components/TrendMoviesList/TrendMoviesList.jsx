import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './TrendMoviesList.module.css';

export const TrendMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map(movie => {
        return (
          <li key={nanoid()} className={css.movieItem}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
