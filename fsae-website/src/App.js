import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import ImageOfCar from "./components/image-of-car";
import Sponsors from "./components/sponsors";

//REMEMBER TO COMMIT ALL CHANGES
function App() {
  return (
    <div class='container bg-primary'>
      <NavBar />
      <div
        class='jumbotron bg-primary text-light'
        style={{ paddingBottom: "300px" }}
      >
        <h1
          class='display-2 font-weight-bold'
          style={{ width: "1500px", paddingLeft: "250px" }}
        >
          We are Sun Devil Motorsports
        </h1>

        <h3
          class='font-family-Roboto text-secondary'
          style={{ width: "1500px", paddingLeft: "300px" }}
        >
          This website is still charging, stay tuned for updates!
        </h3>
      </div>
      <div
        class='col bg-secondary text-center'
        style={{ paddingTop: "45px", paddingBottom: "150px" }}
      >
        <h1
          class=' border-top border-dark header-primary mx-auto text-dark text-center font-weight-light '
          style={{
            width: "900px",
            paddingTop: "45px",
            paddingBottom: "45px",
          }}
        >
          We are a collegiate-level engineering team at Arizona State
          University's Polytechnic campus
        </h1>
      </div>
      <div
        class='col bg-light text-center'
        style={{ paddingTop: "100px", paddingBottom: "300px" }}
      >
        <Sponsors />
      </div>
    </div>
  );
}

export default App;
