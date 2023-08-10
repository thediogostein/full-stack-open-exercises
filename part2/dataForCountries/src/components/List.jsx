import { CountryDetails } from './CountryDetails';
import { ListItem } from './ListItem';

export const List = ({ countries, searchQuery }) => {
  let elements;

  if (countries.length > 10 && searchQuery.length > 0) {
    elements = <p>Too many countries</p>;
  } else if (countries.length > 1 && countries.length <= 10) {
    elements = (
      <ul>
        {countries.map((country) => (
          <ListItem name={country.name.common} key={country.name.common} />
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
