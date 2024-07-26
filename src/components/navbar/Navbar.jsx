import React, { useState } from "react";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import Sidebar from "../sidebar/Sidebar";

import "./nav.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

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
            <button className="login">Login</button>
            <button className="signup">Sign up</button>
          </div>
        </div>

        <div className="sidebar">
          <button className="z-10" onClick={() => setSidebar((prev) => !prev)}>
            <TextAlignRightIcon className="h-10 w-10 font-bold"></TextAlignRightIcon>
          </button>
        </div>
        {sidebar ? <Sidebar toggle={sidebar} /> : null}
      </nav>
    </>
  );
}

export default Navbar;
