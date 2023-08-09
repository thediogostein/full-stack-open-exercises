import { useEffect, useState } from 'react';
import personService from './services/persons';
import { Filter } from './components/Filter';
import { AddNewPerson } from './components/AddNewPerson';
import { List } from './components/List';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [typeOfMessage, setTypeOfMessage] = useState('');

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
        setTypeOfMessage('notification');
        setNotificationMessage('Person added');
        setTimeout(() => {
          setNotificationMessage(null);
        }, 2000);
      });
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService //
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
        .catch((err) => {
          setTypeOfMessage('error');

          setNotificationMessage(
            `${personToDelete.name} has already been removed from server`
          );
          setTimeout(() => setNotificationMessage(null), 5000);
          console.log(err);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notificationMessage}
        typeOfMessage={typeOfMessage}
      />
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
