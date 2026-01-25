import React from "react";
// This tells React to find the actual file in your images folder
import feelingProud from "../../assets/images/qfeelingProud.svg";

function FeelingProud() {
  return (
    <img
      alt="Female Developer"
      src={feelingProud}
      style={{ 
        width: "100%", 
        height: "auto",
        maxWidth: "600px" // Prevents it from getting too huge
      }}
    />
  );
}

export default FeelingProud;