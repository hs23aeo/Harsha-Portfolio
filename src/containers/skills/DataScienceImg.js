import React from "react";
// Import the female-representative SVG you downloaded for this section
import dataScienceIllustration from "../../assets/images/data_science.svg";

function DataScienceImg() {
  return (
    <div className="skills-image-div">
      <img
        src={dataScienceIllustration}
        alt="Data Science Illustration"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%"
        }}
      />
    </div>
  );
}

export default DataScienceImg;