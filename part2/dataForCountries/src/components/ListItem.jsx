import React, { useState } from 'react';
import { CountryDetails } from './CountryDetails';

import styles from './ListItem.module.css';

export const ListItem = ({ name, capital, area, languages, flagSrc }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const showDetails = () => {
    setIsShowingMore(!isShowingMore);
    console.log('show details for');
  };

  const listItemEl = (
    <div className={styles.item}>
      <p>{name}</p> <button onClick={showDetails}>show</button>
    </div>
  );

  const countryDetailsEl = (
    <div className={styles.itemDetails}>
      <CountryDetails
        name={name}
        capital={capital}
        area={area}
        languages={languages}
        flagSrc={flagSrc}
      />{' '}
      <div className={styles.btnContainer}>
        <button onClick={() => setIsShowingMore(!isShowingMore)}>
          show less
        </button>
      </div>
    </div>
  );

  return <li>{isShowingMore ? countryDetailsEl : listItemEl}</li>;
};
