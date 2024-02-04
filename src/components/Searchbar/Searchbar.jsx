import { useEffect } from 'react';
import css from './Searchbar.module.css';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearcParams] = useSearchParams();

  const query = searchParams.get('sQuery');

  useEffect(() => {
    if (query === null) return;
    const fetchMoviesByQuery = async () => {
  
}
  }, [query]);

  const handleSubmitForm = event => {
    event.preventDefault();
    const searchValue = event.target.value;
    setSearcParams({sQuery: searchValue})
  };

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmitForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            dafaultValue = {query}
          />
        </form>
      </header>
    </div>
  );
};
