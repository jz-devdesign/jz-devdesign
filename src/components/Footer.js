import "../style/components/Footer.scss";

function Footer() {
  return (
    <div className="footer">
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

export default Footer;
