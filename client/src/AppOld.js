import React, { Component } from "react";
import logo from "./logo.png";
import roolettBackground from "./roolettBackground.jpg";
import "./App.css";
import FormPage from "./components/signUp.js";
import textBox from './components/textBox.js';
import logIn from './components/logIn';
import axios from 'axios';
import PetCard from './components/card.js';
// import Routes from "./Routes";
import { BrowserRouter, Route } from 'react-router-dom';
// import {  Link  } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {

state = {
  animals: []
}

componentDidMount = () => {
  axios.get('/api/test').then(response => {
    this.setState({animals: response.data.animals})
    console.log(response.data.animals)
  })
}

rowStyle = {
  display: 'grid',
  width: '100vw',
  gridTemplateColumns: '25% 25% 25% 25%' 

}

cardStyle = {
  width: '25vw'

}
   render() {
    return (
      <div id="App">
             <div id="AppHeader">
              <img src={logo} id="AppLogo" alt="logo" />
              <img src={roolettBackground} id="roolettBackground" alt="roolettBackground" />
              <h2 id="PRheader">PetRoolette</h2>
              </div>
            <div id="appdescription">
            <div className="App container">
            <Navbar fluid collapseOnSelect>
              <div class="header">
                   Hey Im a nav bar Header
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle />          
                <Navbar.Collapse>
                    <Nav pullRight>
                    <LinkContainer to="/signup">
                      <NavItem href="/signup">Signup</NavItem>
                      </LinkContainer>  
                      <LinkContainer to="/login"></LinkContainer>
                      <NavItem href="/login">Login</NavItem>
                    </Nav>
                  </Navbar.Collapse>
               </div>
              </Navbar>
                     <p >An app for the indecisive would-be pet owner</p>
                <p>Swipe left until you find a Pet you like- then swipe right!</p>
            </div>
            <BrowserRouter>
          <div className="contentDiv">
            <Route exact path="/" component={ FormPage } />
            <Route exact path="/login" component= { logIn } />
            <Route exact path="/confirmation" component= { textBox } />
            <div style={this.rowStyle}> 
              {this.state.animals.map(animal => 
                <div >
                  <div style={this.cardStyle} className="col-lg-3"><PetCard name={animal.name} image={animal.photos[0] ? animal.photos[0].small : ''} species={animal.species} size={animal.size} gender={animal.gender} breed={animal.breeds.primary} /></div>
                </div>
              
              )}
            </div>
          </div>
        </BrowserRouter>
            </div>
       </div>
      
    );
  }
}

export default App;