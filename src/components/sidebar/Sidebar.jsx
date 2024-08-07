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
            <li>Home</li>
            <li>Rooms</li>
            <li>About</li>
          </ul>
        </div>

        <div className="sidebar-btn | absolute bottom-6">
          <button className="btn btn-orange | mb-4 block">Sign up</button>
          <button className="btn btn-green | block">Login</button>
        </div>
      </div>
      <div
        className={`sidebar-container ${sidebarState.sidebarOpen ? "overlay" : ""}`}
      ></div>
    </>
  );
}

export default Sidebar;
