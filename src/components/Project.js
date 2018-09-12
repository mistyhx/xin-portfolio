import React, { Component } from "react";
import Intro from "./Intro";
import ProjectList from "./ProjectList";

class Project extends Component {
  render() {
    return (
      <div className="container">
        <Intro />
        <ProjectList />
      </div>
    );
  }
}

export default Project;
