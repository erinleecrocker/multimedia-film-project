import React from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <span id="nav-background">
  
     <nav className="navbar navbar-expand-md nav-link">
      <a
        className="nav-link"
        to="/"
        href="/"
        id = 'site-title'
      >
        Multimedia Final
      </a>
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
            {/* <Link className="nav-link" to="/about"> */}
              Ponsavon Silapath
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/troung-van"> */}
              Truong Van
            {/* </Link> */}
          </li>
          <li className="nav-item">
          {/* <Link className="nav-link" to="/more"> */}
              More
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>

    </span>
    </navbar>
  );
};

export default Navbar;
