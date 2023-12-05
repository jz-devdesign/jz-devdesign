import "../style/Footer.css"

function Footer() {

    return <div className="footer">
        <span className="name-tag">Jinping Zhang</span>
        <ul className="menu">
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/hobbies">Hobbies</a></li>
            <li><a target="_blank" href="/resume.pdf">Resume</a></li>
        </ul>
        <a target="_blank"
           href="https://www.linkedin.com/in/jinping-zhang-66887924b/"
           className="link-section">
            <img src="/icons/linkedin.svg" alt="Linkedin"/>
        </a>
    </div>
}

export default Footer;