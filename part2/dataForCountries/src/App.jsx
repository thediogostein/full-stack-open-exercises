import { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from './components/List';
import { Search } from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState('');

  useEffect(() => {
    const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api';

    axios
      .get(`${API_URL}/all`) //
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <List countries={countries} />
    </>
  );
}

export default App;
