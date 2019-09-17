import React, { Component } from "react";
<<<<<<< HEAD
import FormPage from "./components/signUp.js"
import logo from "./logo.png";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
// import Form from "./components/form.js"
import logo from "./logo.png";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPage from "./components/signUp.js";
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4



class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="AppHeader">
          <img src={logo} id="AppLogo" alt="logo" />
          <h2>PawFinder</h2>
          <p>Swipe left until you find a Pet you like then swipe right!</p>
        </div>
<<<<<<< HEAD
        <FormPage />
        <div id="contentDiv"></div>
=======
        <div id="contentDiv">
          <FormPage />

        </div>
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;
