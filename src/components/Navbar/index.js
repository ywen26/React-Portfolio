import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import resume from "../../docs/Resume-YuwenY.pdf";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand font-weight-bold" to="/">
          <span>Yuwen Yu</span>
        </Link>
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/projects">
                Work
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