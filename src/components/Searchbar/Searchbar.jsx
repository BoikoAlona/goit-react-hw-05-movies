import css from './Searchbar.module.css';


export const Searchbar = ({ onSubmit }) => {

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target.value)
        }}>
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
