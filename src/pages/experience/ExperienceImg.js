import React, { Component } from "react";
// Direct import is the most stable way to ensure Webpack finds the file
import experienceIllustration from "../../assets/images/experience.svg";

class ExperienceImg extends Component {
  render() {
    return (
      <div className="experience-img-div">
        <img
          src={experienceIllustration}
          alt="Experience Illustration"
          style={{ 
            width: "100%", 
            height: "auto",
            maxWidth: "600px" 
          }}
        />
      </div>
    );
  }
}

export default ExperienceImg;