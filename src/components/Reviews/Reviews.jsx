import { useEffect, useState } from 'react';

import { ReviewItem } from 'components/FilteredMovieList/FilteredMovieList';

import { requestReviews } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

export const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getReviews = async () => {
      try {
        setStatus(STATUSES.pending);
        const fetchedMovie = await requestReviews();
        setStatus(STATUSES.success);
        setReview(prevState => [...prevState, ...fetchedMovie]);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      <ReviewItem review={review} />
    </div>
  );
};