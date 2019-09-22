
import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import roolettBackground from "./roolettBackground.jpg";
import FormPage from "./components/signUp.js";
import textBox from './components/textBox.js';
import logIn from './components/logIn';
import PetCard from './components/card.js';
import axios from 'axios';
import {  BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

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
          
            {/* <div id="appdescription"> */}
              <div className="App container">
                <Navbar fluid collapseOnSelect>
                <div>
                  <Navbar.Brand>
                    <Link to="/">PetRoolett</Link>
                    </Navbar.Brand> 
                  <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Toggle />
                           <LinkContainer to="/signup">
                            <NavItem>Signup</NavItem>
                            </LinkContainer>
                            
                            <LinkContainer to="/login">
                            <NavItem>Login</NavItem>
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
                      <div style={this.rowStyle}> 
                        {this.state.animals.map(animal => 
                          <div >
                            <div style={this.cardStyle} className="col-lg-3"><PetCard name={animal.name} image={animal.photos[0] ? animal.photos[0].small : ''} species={animal.species} size={animal.size} gender={animal.gender} breed={animal.breeds.primary} /></div>
                          </div>
                        )}
                      </div>
                      </div>
                </Router>
            </div>
        </div>
  );
}

}

export default App;