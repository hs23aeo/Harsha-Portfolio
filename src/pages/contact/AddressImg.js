import React, { Component } from "react";
// You can use a female version of the address/location SVG here
import addressIllustration from "../../assets/images/address_image.svg"; 

class AddressImg extends Component {
  render() {
    return (
      <div className="address-img-div">
        <img
          src={addressIllustration}
          alt="Address Illustration"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }
}

export default AddressImg;