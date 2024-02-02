import { Link } from 'react-router-dom';

import css from 'components/MovieItem/MovieItem.module.css';

export const MovieItem = ({ movie, id }) => {
  
  return (
    <li movie={movie} key={id} className={css.movieItem}>
      <Link to={`/movies/${id}`}>
      </Link>
    </li>
  );
};
