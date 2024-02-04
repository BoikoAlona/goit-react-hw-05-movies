import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestCast } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';
import image from 'components/Image/vecteezy_icon-image-not-found-vector_.jpg';

import css from 'components/MovieCast/MovieCast.module.css';

export const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const { movieId } = useParams();


  useEffect(() => {
    const getCast = async () => {
      try {
        setStatus(STATUSES.pending);
        const shownMovieCast = await requestCast(movieId);
        setStatus(STATUSES.success);
        setCast(shownMovieCast.cast);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
        <ul className={css.castList}>
        {cast?.map(item => {
                return (
                  <li className={css.castItem} key={item.id}>
                    <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                      : image} alt={item.original_name} width={100}></img>
                        <p>{item.original_name}</p>
                        <p>{item.character}</p>
                    </li>
                );
            })};
        </ul>
    </div>
  );
};