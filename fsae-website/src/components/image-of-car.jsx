import React, { Component } from "react";
import "./custom.css";
// Stateless Functional Component
const ImageOfCar = () => {
  console.log("ImageOfCar - Rendered");
  return <div className='parallax'></div>;
};
//This is how you add stylesheets to things on top of bootstrap, just add the stylesheet to the class name!
export default ImageOfCar;
