import React from 'react';

export const AddNewPerson = ({ handleSubmit, handleChange, newPerson }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            name="name"
            value={newPerson.name}
          />
        </div>
        <div>
          <label htmlFor="number">number:</label>
          <input
            id="number"
            type="text"
            onChange={handleChange}
            name="number"
            value={newPerson.number}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
