import { useContext } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { SidebarContext } from "../../context/SidebarContext";

import "./sidebar.css";

function Sidebar() {
  const setSidebar = useContext(SidebarContext);

  return (
    <>
      <div className="overlay"></div>
      <div className="sidebar-container">
        <div className="close-btn | absolute top-4 right-2">
          <button onClick={setSidebar}>
            <Cross2Icon className="h-10 w-10"></Cross2Icon>
          </button>
        </div>
        <div>
          <ul className="mt-16">
            <li>Home</li>
            <li>Rooms</li>
            <li>About</li>
          </ul>
        </div>

        <div className="sidebar-btn | absolute bottom-6">
          <button className="signup | block mb-4">Sign up</button>
          <button className="login | block">Login</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
