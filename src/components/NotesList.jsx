import NoteCard from "./NoteCard";

function NotesList({
  notes,
  deleteNote,
  setEditingNote,
}) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          setEditingNote={setEditingNote}
        />
      ))}
    </div>
  );
}

export default NotesList;