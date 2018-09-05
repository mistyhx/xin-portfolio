import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";
import { ProjectsData } from "../data/ProjectsData";

class ProjectList extends Component {
  render() {
    return (
      <div>
        <h4 style={{ color: "#454545", fontWeight: 300 }}>Recent Projects</h4>
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
