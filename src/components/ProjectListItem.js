import React, { Component } from "react";

class ProjectListItem extends Component {
  render() {
    const { projectdata, index } = this.props;
    return (
      <div>
        <div>{index + 1}</div>
        <h1>{projectdata.title}</h1>
        <h3>{projectdata.category}</h3>
        <p>{projectdata.description}</p>
        <div className="ProjectImage" />
      </div>
    );
  }
}

export default ProjectListItem;
