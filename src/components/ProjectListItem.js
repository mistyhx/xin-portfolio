import React, { Component } from "react";

class ProjectListItem extends Component {
  render() {
    const { projectdata, index } = this.props;
    return (
      <div style={{ marginBottom: "150px" }} className="project-item">
        <div className="indexNumber">
          00
          {index + 1}
        </div>
        <div class="wrapper">
          <div className="project-intro">
            <div className="title">{projectdata.title}</div>
            <div className="category">{projectdata.category}</div>

            <div className="description">{projectdata.description}</div>
          </div>

          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              className="project-intro-video"
              src={projectdata.url}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectListItem;
