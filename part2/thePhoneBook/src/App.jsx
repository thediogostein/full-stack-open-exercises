import { useEffect, useState } from 'react';
import personService from './services/persons';
import { Filter } from './components/Filter';
import { AddNewPerson } from './components/AddNewPerson';
import { List } from './components/List';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = persons.find(
          (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
        );
        const changedNumber = { ...personToUpdate, number: newPerson.number };

        personService //
          .update(personToUpdate.id, changedNumber)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personToUpdate.id ? person : returnedPerson
              )
            );
            setNewPerson({ name: '', number: '' });
          });
      }
      return;
    }

    personService //
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons((prevPersons) => [...prevPersons, returnedPerson]);
        setNewPerson({ name: '', number: '' });
      });
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService //
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)));
    }
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

      <List persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
