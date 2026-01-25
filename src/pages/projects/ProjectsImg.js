import React, { Component } from "react";
// Direct import to ensure the female version loads
import projectsIllustration from "../../assets/images/projects_image_female.svg";

class ProjectsImg extends Component {
  render() {
    return (
      <div className="project-img-div">
        <img
          src={projectsIllustration}
          alt="Projects Illustration"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }
}

export default ProjectsImg;