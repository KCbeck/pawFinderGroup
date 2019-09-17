import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx"
// import logo from "./logo.png";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div id="App">
        <Navbar />
        <div id="contentDiv"></div>

      </div>
    );
  }
}

export default App;
