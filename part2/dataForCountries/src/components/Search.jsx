export const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
