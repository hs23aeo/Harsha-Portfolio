import React, { Component } from "react";
import blogIllustration from "../../assets/images/blogs_image_female.svg";

class BlogsImg extends Component {
  render() {
    return (
      <div className="blog-img-div">
        <img
          src={blogIllustration}
          alt="Blogs Illustration"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }
}

export default BlogsImg;