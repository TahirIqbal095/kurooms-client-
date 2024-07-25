import "./nav.css";

function Navbar() {
  return (
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
    </nav>
  );
}

export default Navbar;
