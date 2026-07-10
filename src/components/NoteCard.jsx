// function NoteCard({ note, deleteNote, setEditingNote }) {
//   return (
//     <div className="note-card">
//       <h3>{note.title}</h3>

//       <p>{note.description}</p>

//       <div className="buttons">
//         <button onClick={() => setEditingNote(note)}>
//           Edit
//         </button>

//         <button
//           className="delete"
//           onClick={() => deleteNote(note.id)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NoteCard;
// import {
//   MdDelete,
//   MdEdit,
// } from "react-icons/md";

// function NoteCard({
//   note,
//   deleteNote,
// }) {
//   return (
//     <div className="note-card">
//       <h3>{note.title}</h3>

//       <p>{note.description}</p>

//       <div className="note-actions">
//         <button>
//           <MdEdit />
//         </button>

//         <button
//           onClick={() =>
//             deleteNote(note.id)
//           }
//         >
//           <MdDelete />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NoteCard;
import {
  MdDelete,
  MdEdit,
  MdArchive,
} from "react-icons/md";

function NoteCard({
  note,
  deleteNote,
  archieveNote,
  activeMenu,
}) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>

      <p>{note.description}</p>

      <div className="note-actions">
        <button>
          <MdEdit />
        </button>
        {activeMenu === "Notes" && (
  <button
    onClick={() =>
      archiveNote(note.id)
    }
  >
    <MdArchive />
  </button>
)}

        <button
          onClick={() =>
            deleteNote(note.id)
          }
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;