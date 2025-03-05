import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Freemiun-GPT 🤖
      </div>
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a> {/*Will be updated with routing*/}
        {/* <a href="/about" className="navbar-link">About</a>
        <a href="/contact" className="navbar-link">Contact</a> */}
        <button className="navbar-button navbar-login">Login</button>
        <button className="navbar-button navbar-signup">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;