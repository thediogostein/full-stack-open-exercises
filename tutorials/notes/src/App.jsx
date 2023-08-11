import { useState, useEffect } from 'react';

import noteService from './services/notes';
import Notification from './components/Notification';
import Note from './components/Note';
import Footer from './components/Footer';

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    noteService //
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
      });
  }, []);

  const toggleImportanceOf = (id) => {
    // Find the note we want to modify, and then assign it to the note variable
    const note = notes.find((n) => n.id === id);
    // Create a new object(exact copy of the old note, and flip the value of 'important')
    const changedNote = { ...note, important: !note.important };

    noteService //
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);

        // the deleted note gets filtered out from the state
        // Removing an already deleted note from the application's state is done with the array filter method, which returns a new array comprising only the items from the list for which the function that was passed as a parameter returns true for:
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService //
      .create(noteObject)
      .then((returnedNote) => {
        setNotes(notes.concat(returnedNote));
        setNewNote('');
      });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportanceOf={() => toggleImportanceOf(note.id)}
            // toggleImportanceOf={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      <Footer />
    </div>
  );
};

export default App;
