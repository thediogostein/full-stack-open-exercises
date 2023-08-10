import React, { useState } from 'react';
import { CountryDetails } from './CountryDetails';

export const ListItem = ({ name, capital, area, languages, flagSrc }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const showDetails = () => {
    setIsShowingMore(!isShowingMore);
    console.log('show details for');
  };

  const listItemEl = (
    <>
      <p>{name}</p> <button onClick={showDetails}>show</button>
    </>
  );

  const countryDetailsEl = (
    <div>
      <CountryDetails
        name={name}
        capital={capital}
        area={area}
        languages={languages}
        flagSrc={flagSrc}
      />{' '}
      <button onClick={() => setIsShowingMore(!isShowingMore)}>
        show less
      </button>
    </div>
  );

  return (
    <li className="countryItem">
      {isShowingMore ? countryDetailsEl : listItemEl}
    </li>
  );
};
