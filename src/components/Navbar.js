import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo"> XIN HU</div>
        <div className="nav-options">
          <Link to="/">
            <div>PROJECTS</div>
          </Link>
          <Link to="about">
            <div>ABOUT ME</div>
          </Link>
          <Link to="contact">
            <div>CONTACT</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
