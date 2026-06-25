import logo from "../assets/image.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="teamLogo" />
      </div>
      <h1>4dev</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#team">Team member</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
