import css from './TrendMoviesList.module.css';
import { MovieItem } from 'components/MovieItem/MovieItem';

export const FilteredMoviesList = ({movies}) => {

  return (
    <ul className={css.imageGallery}>
      {movies.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            movie={movie}
          />
        );
      })}
    </ul>
  );
};