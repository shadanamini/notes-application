import NotesList from "./components/NotesList";
import {nanoid} from "nanoid";
import {useState} from 'react';

const App = () => {

  const [notes, setNotes] = useState(
    [
      {
        id: nanoid(),
        text: "Note",
        date: "12/01/2021",
      },
      {
        id: nanoid(),
        text: "Note 2",
        date: "12/01/2021",
      },
    ]);

    const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    };

    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes); 
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App;