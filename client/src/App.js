import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import logo from "./logo.png";
import roolettBackground from "./roolettBackground.jpg";
import "./App.css";
import FormPage from "./components/signUp.js";
import textBox from './components/textBox.js';
import logIn from './components/logIn';
// import SimpleCarousel from "./components/Swipeable";
// import Footer from './components/Footer.js';
// import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="AppHeader">
          <img src={logo} id="AppLogo" alt="logo" />
          <img src={roolettBackground} id="roolettBackground" alt="roolettBackground" />
          <h2 id="PRheader">PetRoolette</h2>
        </div>
        <div id="appdescription">
          <p >An app for the indecisive would-be pet owner</p>
          <p>Swipe left until you find a Pet you like- then swipe right!</p>
        </div>
        <BrowserRouter>
          <div className="contentDiv">
            <Route exact path="/" component={ FormPage } />
          {/* <Route exact path="/pets" component= { card } /> */}
            <Route exact path="/login" component= { logIn } />
            <Route exact path="/confirmation" component= { textBox } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;