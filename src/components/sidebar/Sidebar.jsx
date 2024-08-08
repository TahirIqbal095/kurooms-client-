import { Link } from "react-router-dom";

import { Cross2Icon } from "@radix-ui/react-icons";
import { useSidebar } from "../../context/SidebarContext";

import "./sidebar.css";

function Sidebar() {
  const sidebarState = useSidebar();

  return (
    <>
      <div
        className={`sidebar-container ${sidebarState.sidebarOpen ? "open" : ""}`}
      >
        <div className="close-btn | relative right-2 top-4">
          <button onClick={() => sidebarState.toggleSidebar()}>
            <Cross2Icon className="h-10 w-10"></Cross2Icon>
          </button>
        </div>
        <div>
          <ul className="mt-16 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listing-all">Rooms</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-btn | absolute bottom-6">
          <Link to="/sign-up" className="btn btn-orange | mb-4 block">
            Sign up
          </Link>
          <Link to="/sign-in" className="btn btn-green | block">
            Login
          </Link>
        </div>
      </div>
      <div
        className={`sidebar-container ${sidebarState.sidebarOpen ? "overlay" : ""}`}
      ></div>
    </>
  );
}

export default Sidebar;
