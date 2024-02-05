import css from './Searchbar.module.css';

import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const hadleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchInput.value;
    onSubmit(query);
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={hadleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.searchFormInput}
            type="text"
            name="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </header>
    </div>
  );
};
