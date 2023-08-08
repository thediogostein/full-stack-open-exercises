import React from 'react';

export const AddNewPerson = ({ handleSubmit, handleChange, newPerson }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">name:</label>
          <input
            id="name"
            onChange={handleChange}
            name="name"
            value={newPerson.name}
          />
        </div>
        <div>
          <label htmlFor="phone">number:</label>
          <input
            id="phone"
            type="text"
            onChange={handleChange}
            name="phone"
            value={newPerson.phone}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
