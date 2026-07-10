// import { useState } from "react";
// import Header from "./components/Header";
// import NoteForm from "./components/NoteForm";
// import NotesList from "./components/NotesList";
// import "./App.css";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [editingNote, setEditingNote] = useState(null);

//   const addNote = (note) => {
//     setNotes([
//       ...notes,
//       {
//         id: Date.now(),
//         ...note,
//       },
//     ]);
//   };

//   const deleteNote = (id) => {
//     setNotes(notes.filter((note) => note.id !== id));
//   };

//   const updateNote = (updatedNote) => {
//     setNotes(
//       notes.map((note) =>
//         note.id === updatedNote.id ? updatedNote : note
//       )
//     );

//     setEditingNote(null);
//   };

//   return (
//     <div className="app">
//       <Header />

//       <NoteForm
//         addNote={addNote}
//         editingNote={editingNote}
//         updateNote={updateNote}
//       />

//       <NotesList
//         notes={notes}
//         deleteNote={deleteNote}
//         setEditingNote={setEditingNote}
//       />
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import NoteInput from "./components/NoteInput";
// import NotesGrid from "./components/NotesGrid";
// import "./App.css";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const addNote = (note) => {
//     setNotes([
//       {
//         id: Date.now(),
//         ...note,
//       },
//       ...notes,
//     ]);
//   };

//   const deleteNote = (id) => {
//     setNotes(notes.filter((note) => note.id !== id));
//   };

//   return (
//     <>
//       <Header
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       <div className="container">
//         <Sidebar sidebarOpen={sidebarOpen} />

//         <main className="main-content">
//           <NoteInput addNote={addNote} />
//           <NotesGrid
//             notes={notes}
//             deleteNote={deleteNote}
//           />
//         </main>
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoteInput from "./components/NoteInput";
import NotesGrid from "./components/NotesGrid";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
const [archivedNotes, setArchivedNotes] = useState([]);
const [deletedNotes, setDeletedNotes] = useState([]);

const [sidebarOpen, setSidebarOpen] = useState(true);
const [activeMenu, setActiveMenu] = useState("Notes");

  const addNote = (note) => {
    setNotes([
      {
        id: Date.now(),
        ...note,
      },
      ...notes,
    ]);
  };

  const deleteNote = (id) => {
  const noteToDelete = notes.find(
    (note) => note.id === id
  );

  setDeletedNotes([
    noteToDelete,
    ...deletedNotes,
  ]);

  setNotes(
    notes.filter(
      (note) => note.id !== id
    )
  );
};
const archiveNote = (id) => {
  const noteToArchive = notes.find(
    (note) => note.id === id
  );

  setArchivedNotes([
    noteToArchive,
    ...archivedNotes,
  ]);

  setNotes(
    notes.filter(
      (note) => note.id !== id
    )
  );
};
let currentNotes = notes;

if (activeMenu === "Archive") {
  currentNotes = archivedNotes;
}

if (activeMenu === "Bin") {
  currentNotes = deletedNotes;
}

  return (
    <>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="container">
        <Sidebar
  sidebarOpen={sidebarOpen}
  activeMenu={activeMenu}
  setActiveMenu={setActiveMenu}
/>

        <main className="main-content">
          <NoteInput addNote={addNote} />

          <NotesGrid
  notes={currentNotes}
  deleteNote={deleteNote}
  archiveNote={archiveNote}
  activeMenu={activeMenu}
/>
        </main>
      </div>
    </>
  );
}

export default App;