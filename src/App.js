import React, { Component } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Navbar />
          <Intro />
          <ProjectList />
        </p>
      </div>
    );
  }
}

export default App;
