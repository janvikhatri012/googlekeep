// import { useState } from "react";

// function NoteInput({ addNote }) {
//   const [expanded, setExpanded] =
//     useState(false);

//   const [title, setTitle] = useState("");
//   const [description, setDescription] =
//     useState("");

//   const handleAdd = () => {
//     if (!title && !description) return;

//     addNote({
//       title,
//       description,
//     });

//     setTitle("");
//     setDescription("");
//     setExpanded(false);
//   };

//   return (
//     <div
//       className={`note-input ${
//         expanded ? "expanded" : ""
//       }`}
//       onClick={() => setExpanded(true)}
//     >
//       {expanded && (
//         <input
//           placeholder="Title"
//           value={title}
//           onChange={(e) =>
//             setTitle(e.target.value)
//           }
//         />
//       )}

//       <textarea
//         placeholder="Take a note..."
//         value={description}
//         onChange={(e) =>
//           setDescription(e.target.value)
//         }
//       />

//       {expanded && (
//         <button onClick={handleAdd}>
//           Close
//         </button>
//       )}
//     </div>
//   );
// }

// export default NoteInput;
import { useState } from "react";

function NoteInput({ addNote }) {
  const [expanded, setExpanded] =
    useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleAdd = () => {
    if (!title && !description) return;

    addNote({
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setExpanded(false);
  };

  return (
    <div
      className={`note-input ${
        expanded ? "expanded" : ""
      }`}
      onClick={() => setExpanded(true)}
    >
      {expanded && (
        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
      )}

      <textarea
        placeholder="Take a note..."
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      {expanded && (
        <button onClick={handleAdd}>
          Add Note
        </button>
      )}
    </div>
  );
}

export default NoteInput;