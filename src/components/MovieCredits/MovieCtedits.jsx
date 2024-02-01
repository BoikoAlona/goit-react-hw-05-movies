import { useEffect, useState } from 'react';

import { CreditItem } from 'components/MovieCredits/MovieCreditsItem';

import { requestCredits } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from 'components/Utils/Constants';

export const MovieReviews = () => {
  const [credit, setCredit] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getCredits = async () => {
      try {
        setStatus(STATUSES.pending);
        const fetchedCredit = await requestCredits();
        setStatus(STATUSES.success);
        setCredit(fetchedCredit.credit);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getCredits();
  }, [movieId]);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <p>ERROR{error}</p>}
      <CreditItem credit={credit} />
    </div>
  );
};