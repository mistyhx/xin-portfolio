import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Navbar from "./Navbar";
import { CSSTransition } from "react-transition-group";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <ProjectList />
      </div>
    );
  }
}

export default Contact;
