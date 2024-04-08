import "../style/components/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt=""></img>
        <span className="name-tag">JPZ</span>
      </div>
      <ul className="menu">
        <li>
          <a href="/#/">Projects</a>
        </li>
        <li>
          <a target="_blank" href="/resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
