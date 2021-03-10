import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import resume from "../../docs/Resume-YuwenY.pdf";
import logo from "../../images/logo.png";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand font-weight-bold" to="/">
          <span>
            <img src={logo} alt="logo"/>
          </span>
        </Link>
        <div className="option">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href={resume} download>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;