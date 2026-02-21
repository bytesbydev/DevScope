import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-icon">🐙</div>
        <h1 className="navbar-title">GitHub Analyzer</h1>
      </div>
      <p className="navbar-tagline">// drop a username. get the full picture.</p>
    </nav>
  );
};

export default Navbar;
