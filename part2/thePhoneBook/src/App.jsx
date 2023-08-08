import { useState } from 'react';
import { Filter } from './assets/components/Filter';
import { AddNewPerson } from './assets/components/AddNewPerson';
import { List } from './assets/components/List';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 },
  ]);

  const [newPerson, setNewPerson] = useState({ name: '', phone: '' });
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      persons.find(
        (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
      )
    ) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    setPersons((prevPersons) => [...prevPersons, newPerson]);
    setNewPerson({ name: '', phone: '' });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} filter={filter} />

      <h2>add a new</h2>
      <AddNewPerson
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newPerson={newPerson}
      />

      <h2>List of people</h2>

      <List persons={persons} filter={filter} />
    </div>
  );
};

export default App;
