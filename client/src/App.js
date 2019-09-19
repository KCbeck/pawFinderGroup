import React, { Component } from "react";
import FormPage from "./components/signUp.js"
import logo from "./logo.png";
import "./App.css";




class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="AppHeader">
          <img src={logo} id="AppLogo" alt="logo" />
          <h2>PetRoolette</h2>
        </div>
        <p>An app for the indecisive would-be pet owner</p>
        <p>Swipe left until you find a Pet you like- then swipe right!</p>
        <div id="contentDiv">
        <FormPage />
        </div>
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;