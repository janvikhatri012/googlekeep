// function Header() {
//   return (
//     <header className="header">
//       <h1>Google Keep Clone</h1>
//     </header>
//   );
// }

// export default Header;
// import {
//   MdMenu,
//   MdSearch,
// } from "react-icons/md";

// function Header({ setSidebarOpen, sidebarOpen }) {
//   return (
//     <header className="header">
//       <div className="left">
//         <button
//           className="icon-btn"
//           onClick={() =>
//             setSidebarOpen(!sidebarOpen)
//           }
//         >
//           <MdMenu size={28} />
//         </button>

//         <img
//           src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
//           alt=""
//           className="logo"
//         />

//         <h2>Keep</h2>
//       </div>

//       <div className="search-box">
//         <MdSearch size={24} />
//         <input
//           type="text"
//           placeholder="Search"
//         />
//       </div>

//       <div className="avatar">
//         KP
//       </div>
//     </header>
//   );
// }

// export default Header;
import { MdMenu, MdSearch } from "react-icons/md";

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="header">
      <div className="left-section">
        <button
          className="icon-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MdMenu size={28} />
        </button>

        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          className="keep-logo"
        />

        <h2>Keep</h2>
      </div>

      <div className="search-box">
        <MdSearch size={24} />

        <input
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="avatar">J</div>
    </header>
  );
}

export default Header;