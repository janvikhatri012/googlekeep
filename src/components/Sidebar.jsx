// import {
//   MdLightbulbOutline,
//   MdNotificationsNone,
//   MdEdit,
//   MdArchive,
//   MdDeleteOutline,
// } from "react-icons/md";

// function Sidebar({ sidebarOpen }) {
//   const items = [
//     {
//       icon: <MdLightbulbOutline />,
//       name: "Notes",
//     },
//     {
//       icon: <MdNotificationsNone />,
//       name: "Reminders",
//     },
//     {
//       icon: <MdEdit />,
//       name: "Edit labels",
//     },
//     {
//       icon: <MdArchive />,
//       name: "Archive",
//     },
//     {
//       icon: <MdDeleteOutline />,
//       name: "Bin",
//     },
//   ];

//   return (
//     <aside
//       className={
//         sidebarOpen
//           ? "sidebar open"
//           : "sidebar"
//       }
//     >
//       {items.map((item) => (
//         <div className="sidebar-item">
//           {item.icon}
//           {sidebarOpen && <span>{item.name}</span>}
//         </div>
//       ))}
//     </aside>
//   );
// }

// export default Sidebar;
import {
  MdLightbulbOutline,
  MdNotificationsNone,
  MdEdit,
  MdArchive,
  MdDeleteOutline,
} from "react-icons/md";

function Sidebar({
  sidebarOpen,
  activeMenu,
  setActiveMenu,
}) {
  const items = [
    {
      icon: <MdLightbulbOutline />,
      text: "Notes",
    },
    {
      icon: <MdNotificationsNone />,
      text: "Reminders",
    },
    {
      icon: <MdEdit />,
      text: "Edit labels",
    },
    {
      icon: <MdArchive />,
      text: "Archive",
    },
    {
      icon: <MdDeleteOutline />,
      text: "Bin",
    },
  ];

  return (
    <aside
      className={
        sidebarOpen
          ? "sidebar open"
          : "sidebar"
      }
    >
      {items.map((item, index) => (
        <div
  key={index}
  className={`sidebar-item ${
    activeMenu === item.text
      ? "active-sidebar"
      : ""
  }`}
  onClick={() =>
    setActiveMenu(item.text)
  }
>
          {item.icon}

          {sidebarOpen && (
            <span>{item.text}</span>
          )}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;