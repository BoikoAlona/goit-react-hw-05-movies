import css from './ImageGalleryItem.module.css';

export const MovieItem = ({ movie, id }) => {
  
  return (
      <li movie={movie} key={id} className={css.ImageGalleryItem}>
    </li>
  );
};
