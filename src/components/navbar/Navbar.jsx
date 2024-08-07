import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { useSidebar } from "../../context/SidebarContext";

import "./nav.css";

function Navbar() {
  const sidebarState = useSidebar();

  return (
    <>
      <nav className="nav-container container">
        <div className="logo">
          <a href="#">Kurooms</a>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>About</li>
          </ul>
          <div className="register">
            <button className="btn btn-orange | mx-2 transition hover:scale-105 hover:shadow">
              Login
            </button>
            <button className="btn btn-green | mx-2 transition hover:scale-105 hover:shadow">
              Sign up
            </button>
          </div>
        </div>

        <button
          className="hamburger | right-4 top-4 z-10"
          onClick={() => sidebarState.toggleSidebar()}
        >
          <TextAlignRightIcon className="h-10 w-10 font-bold"></TextAlignRightIcon>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
