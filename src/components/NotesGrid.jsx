// import NoteCard from "./NoteCard";

// function NotesGrid({
//   notes,
//   deleteNote,
// }) {
//   return (
//     <div className="notes-grid">
//       {notes.map((note) => (
//         <NoteCard
//           key={note.id}
//           note={note}
//           deleteNote={deleteNote}
//         />
//       ))}
//     </div>
//   );
// }

// export default NotesGrid;
import NoteCard from "./NoteCard";

function NotesGrid({
  notes,
  deleteNote,
  archiveNote,
  activeMenu,
}) {
  return (
    <div className="notes-grid">
      {notes.length === 0 ? (
        <div className="empty-state">
          <h2>
            Notes that you add appear here
          </h2>
        </div>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  );
}

export default NotesGrid;