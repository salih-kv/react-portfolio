import React from "react";
import "../reset.css";
import "../styles/Header.css";
import brand_logo from "../assets/salih-dot.png";

import Collapse from 'bootstrap'


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl">
          {/* Brand Logo */}
          <a className="navbar-brand" href="/">
            <img src={brand_logo} alt="brand_logo" />
          </a>
          {/* Hamburger Menu */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navlinksCont" aria-controls="navlinksCont" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navlinksCont">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            {/* Nav Button */}
            <div className="nav-btn">
              <a href="#contact" className="btn primary-btn">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Header;
