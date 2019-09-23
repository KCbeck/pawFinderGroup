import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>PetRoolette</h1>
          <p>The Pet Adoption randomizer App</p>
          <p>for the indecisive would-be Pet Owner</p>
        </div>
      </div>
    );
  }
}
