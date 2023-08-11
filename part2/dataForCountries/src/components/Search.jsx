import styles from './Search.module.css';

export const Search = ({ search, setSearch }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`${styles.form} wrapper`}
    >
      <label htmlFor="search">Find countries</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Countries"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
