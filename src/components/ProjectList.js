import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";
import { ProjectsData } from "../data/ProjectsData";

class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        <ul>
          <li>
            {ProjectsData.map((project, index) => (
              <ProjectListItem projectdata={project} index={index} />
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectList;
