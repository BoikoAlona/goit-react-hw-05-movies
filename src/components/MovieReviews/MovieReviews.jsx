import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestReviews } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

export const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setStatus(STATUSES.pending);
        const shownMovieReview = await requestReviews(movieId);
        setStatus(STATUSES.success);
        setReview(shownMovieReview.results);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getReviews();
  }, [movieId]);

  if (review.length === 0) {
    return "We don't have any reviews on this movie.";
  }

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      <ul>
        {review.map(item => {
          return (
            <li key={item.id}>
              <p style={{ fontWeight: '600' }}>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
