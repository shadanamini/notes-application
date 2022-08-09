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
      {
        id: nanoid(),
        text: "Note 3",
        date: "12/01/2021",
      },
      {
        id: nanoid(),
        text: "Note 4",
        date: "12/01/2021",
      },
    ]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;