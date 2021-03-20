import React, { Component } from "react";
//import "./sponsors.css";
// State Component
//*IMPORTANT****** you must import the images like so or React won't find them in the final render of the webpage.
import image1 from "../assets/small-athena-logo.jpg";
import image2 from "../assets/bender-logo.jpg";
import image3 from "../assets/small-fulton-logo.png";
import image4 from "../assets/usg-polytechnic-logo_0.png";

const imageTypes = {
  image1,
  image2,
  image3,
  image4,
};

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athenaLogo: "image1",
      benderLogo: "image2",
      fultonLogo: "image3",
      usgLogo: "image4",
    };
  }
  render() {
    console.log("Sponsors - Rendered");
    return (
      <div class='container'>
        <img
          src={imageTypes[this.state.fultonLogo]}
          style={{ margin: "30px 30px 30px 30px" }}
        />
        <img
          src={imageTypes[this.state.usgLogo]}
          style={{ margin: "30px 30px 30px 30px" }}
        />
        <img
          src={imageTypes[this.state.athenaLogo]}
          style={{ margin: "30px 30px 30px 30px" }}
        />
        <img
          src={imageTypes[this.state.benderLogo]}
          style={{ margin: "30px 30px 30px 30px" }}
        />
      </div>
    );
  }
}
