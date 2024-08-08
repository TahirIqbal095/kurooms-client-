import { Link } from "react-router-dom";

import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { useSidebar } from "../../context/SidebarContext";

import "./nav.css";

function Navbar() {
  const sidebarState = useSidebar();

  return (
    <>
      <nav className="nav-container container">
        <div className="logo">
          <Link to="/">Kurooms</Link>
        </div>
        <div className="nav-items">
          <ul>
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
          <div className="register">
            <Link
              to="/sign-in"
              className="btn btn-orange | mx-2 transition hover:scale-105 hover:shadow"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="btn btn-green | mx-2 transition hover:scale-105 hover:shadow"
            >
              Sign up
            </Link>
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
