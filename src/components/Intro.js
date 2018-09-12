import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="dev-design">
          <div className="dev-container">
            <h1>Dev</h1>
          </div>
          <div>
            <h3 style={{ fontSize: 120, opacity: 0.2, padding: "20px" }}>&</h3>
          </div>
          <div className="design-container">
            <h1
              style={{
                fontSize: 150,
                opacity: 0.5,
                fontWeight: 900,
                textAlign: "center"
              }}
            >
              DESIGN
            </h1>
          </div>
        </div>
        <div className="myintro">
          <h3
            style={{
              color: "#858585",
              textAlign: "center"
            }}
          >
            Hello! I am a UI/UX Engineer. I help companies which seek
            innovation, with web and mobile experiences.
          </h3>
        </div>
      </div>
    );
  }
}

export default Intro;
