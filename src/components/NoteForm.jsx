import { useState } from "react";

function NoteForm({ addNote, editingNote, updateNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (
    editingNote &&
    editingNote.title !== title &&
    editingNote.description !== description
  ) {
    setTitle(editingNote.title);
    setDescription(editingNote.description);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    if (editingNote) {
      updateNote({
        id: editingNote.id,
        title,
        description,
      });
    } else {
      addNote({
        title,
        description,
      });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Take a note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;