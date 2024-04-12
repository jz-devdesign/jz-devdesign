import "../style/components/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <span />
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
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jinping-zhang-66887924b/"
        className="link-section"
      >
        <img src="/icons/linkedin.svg" alt="Linkedin" />
      </a>
    </div>
  );
}

export default Footer;
