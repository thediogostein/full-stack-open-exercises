import { useState } from 'react';
import { List } from './components/List';
import { Search } from './components/Search';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <List />
    </>
  );
}

export default App;
