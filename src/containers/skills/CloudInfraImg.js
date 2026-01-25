import React from "react";
// Import the female-representative SVG you downloaded for this section
import cloudIllustration from "../../assets/images/cloud_infrastructure.svg";

function CloudInfraImg() {
  return (
    <div className="skills-image-div">
      <img
        src={cloudIllustration}
        alt="Cloud Infrastructure Illustration"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%"
        }}
      />
    </div>
  );
}

export default CloudInfraImg;