import { useNavigate } from "react-router-dom";
import "../style/components/Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("")}>
        <img src="logo.svg" alt=""></img>
        <span className="name-tag">JPZ</span>
      </div>
      <ul className="menu">
        <li>
          <a href="/#/">Home</a>
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
