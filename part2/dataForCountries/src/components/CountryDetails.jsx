import React from 'react';

export const CountryDetails = ({
  // countries,
  name,
  capital,
  area,
  languages,
  flagSrc,
}) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h3>languages:</h3>
      {
        <ul>
          {Object.values(languages).map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      }
      <img src={flagSrc} alt={name} />
    </article>
  );
};
