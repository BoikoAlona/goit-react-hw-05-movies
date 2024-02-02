import css from './TrendMoviesList.module.css';
import { MovieItem } from 'components/MovieItem/MovieItem';

export const TrendMoviesList = ({ movies, id }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => {
        return (
          <MovieItem
            key={movies.id}
            movie={movies.original_title}
          />
        );
      })}
    </ul>
  );
};