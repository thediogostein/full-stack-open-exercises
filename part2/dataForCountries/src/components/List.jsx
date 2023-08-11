import { CountryDetails } from './CountryDetails';
import { ListItem } from './ListItem';

import styles from './List.module.css';

export const List = ({ countries, searchQuery }) => {
  let elements;

  if (countries.length > 10 && searchQuery.length > 0) {
    elements = <p>Too many countries</p>;
  } else if (countries.length > 1 && countries.length <= 10) {
    elements = (
      <ul className={styles.list}>
        {countries.map((country) => (
          <ListItem
            key={country.name.common}
            name={country.name.common}
            capital={country.capital}
            area={country.area}
            languages={country.languages}
            flagSrc={country.flags.png}
          />
        ))}
      </ul>
    );
  } else if (countries.length === 1) {
    elements = (
      <CountryDetails
        countries={countries[0]}
        name={countries[0].name.common}
        capital={countries[0].capital[0]}
        area={countries[0].area}
        languages={countries[0].languages}
        flagSrc={countries[0].flags.png}
      />
    );
  }

  return <>{elements}</>;
};
