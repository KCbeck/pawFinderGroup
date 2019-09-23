
import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import roolettBackground from "./roolettBackground.jpg";
import FormPage from "./components/signUp.js";
import textBox from './components/textBox.js';
import logIn from './components/logIn';
import PetCard from './components/card.js';
import {  BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

class App extends Component {

render() {
  return (
        <div id="App">
            <div id="AppHeader">
            <img src={logo} id="AppLogo" alt="logo" />
            <img src={roolettBackground} id="roolettBackground" alt="roolettBackground" />
            <h2 id="PRheader">PetRoolette</h2>
            </div>
          
            {/* <div id="appdescription"> */}
              <div className="App container">
                <Navbar fluid collapseOnSelect>
                <div>
                  <Navbar.Brand>
                    <Link to="/">PetRoolette</Link>
                    </Navbar.Brand> 
                  <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Toggle />
                            <LinkContainer to="/login">
                            <NavItem> Already have an account? Click here to Login</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/">
                            <NavItem> Indecisive Pet Owner? Sign Up here!</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/cards">
                            <NavItem> Just want to see some pets? Click here</NavItem>
                            </LinkContainer>
                         </Nav>
                   </Navbar.Collapse>
                   </div>                
                  </Navbar>
                <Routes />
              
                <Router>
                    <div className="contentDiv">
                      <Route exact path="/" component={ FormPage } />
                      <Route exact path="/login" component= { logIn } />
                      <Route exact path="/confirmation" component= { textBox } />
                      <Route exact path="/cards" component= { PetCard } />
                      </div>
                </Router>
            </div>
        </div>
  );
}

}

export default App;