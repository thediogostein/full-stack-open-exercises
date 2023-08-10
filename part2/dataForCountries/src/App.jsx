import { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from './components/List';
import { Search } from './components/Search';

import './global.css';

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api';

    axios
      .get(`${API_URL}/all`) //
      .then((response) => {
        setCountries(response.data);
        setIsloading(!isLoading);
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />

      {!isLoading && !errorMessage && (
        <List countries={filteredCountries} searchQuery={search} />
      )}

      {errorMessage && <p>error connecting to database</p>}
    </>
  );
}

export default App;
