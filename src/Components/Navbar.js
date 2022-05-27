import "./Navbar.css"
import Toggle from "./Toggle";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="container">
    {/* <div className="icon-container">
    <a href="https://github.com/deepbb" target="_blank" rel="noreferrer">
    <i className="fab fa-github icon"></i>
    </a>
        <i className="far fa-envelope  icon"></i>
        <i className="fab fa-twitter-square  icon"></i>
        </div> */}
        <div className="menu">
        <Link className="link" to="/projects"> 
        <li className="menu-icons">Projects</li>
        </Link>
        <Link className="link" to="/about"> 
        <li className="menu-icons">About</li>
        </Link>
        <Link className="link" to="/contact"> 
        <li className="menu-icons">Contact</li>
        </Link>
        </div>
        <Toggle />

    </div>
  ) 
}

export default Navbar;
