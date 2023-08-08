import React from 'react';

export const List = ({ persons, filter }) => {
  return (
    <div>
      {' '}
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.phone}
          </p>
        ))}
    </div>
  );
};
