import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-icon">🐙</div>
        <h1 className="navbar-title">DevScope</h1>
      </div>
      <p className="navbar-tagline">
        <span>// drop a username. get the full picture.</span>
      </p>
    </nav>
  );
};

export default Navbar;