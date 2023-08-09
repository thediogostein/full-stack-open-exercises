import React from 'react';

export const Filter = ({ setFilter, filter }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="filter">filter shown with</label>
      <input
        type="text"
        id="filter"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </form>
  );
};
