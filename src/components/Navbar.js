import '../style/Navbar.css'
import {useLocation} from "react-router-dom";

function Navbar() {
    const location = useLocation();
    let textColor;
    if (location.pathname.startsWith('/project')) {
        textColor = 'black'
    } else {
        textColor = 'inherit'
    }

    return <div className="navbar" style={{color: textColor}}>
        <span className="name-tag">JPZ</span>
        <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/hobbies">Hobbies</a></li>
            <li><a target="_blank" href="/resume.pdf">Resume</a></li>
        </ul>
    </div>
}

export default Navbar;