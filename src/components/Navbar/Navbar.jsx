import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <span id="nav-background">
  
     <nav className="navbar navbar-expand-md nav-link">
      <Link
        className="nav-link"
        to="multimedia-film-project/"
        href="multimedia-film-project/"
        id = 'site-title'
      >
        Multi-media Final
      </Link>
      <button
        className="navbar-light navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="multimedia-film-project/ponsavon">
              Ponsavon Silapath
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="multimedia-film-project/troung">
              Truong Van
            </Link>
          </li>
          {/* <li className="nav-item">
          <Link className="nav-link" to="/more">
              More
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>

    </span>
    </navbar>
  );
};

export default Navbar;
