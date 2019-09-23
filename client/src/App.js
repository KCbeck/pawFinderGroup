
import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import roolettBackground from "./roolettBackground.jpg";
import FormPage from "./components/signUp.js";
import textBox from './components/textBox.js';
import logIn from './components/logIn';
import PetCard from './components/card.js';
import axios from 'axios';
import ScrollToTop from "./ScrollToTop.js";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from "./components/Home.js"
import "./Routes"


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
    <BrowserRouter>
      <ScrollToTop>
        <div id="App">
            <div id="AppHeader">
              <img src={logo} id="AppLogo" alt="logo" />
              <img src={roolettBackground} id="roolettBackground" alt="roolettBackground" />
              <h2 id="PRheader">PetRoolette</h2>
            </div>
          
            <div id="appdescription">
              <h1>A pet adoption app for the indecisive would-be pet owner</h1>
              <h2>Already Registered?<Link to="/login"> LOGIN</Link></h2>
              <h2>Looking for a pet? <Link to="/signup">SIGNUP</Link></h2>
            </div>    

            <div className="contentDiv">
              <Route exact path="/" component= { Home } />
              <Route exact path="/signup" component= { FormPage } />
              <Route exact path="/login" component= { logIn } />
              <Route exact path="/confirmation" component= { textBox } />
            </div>

            <div style={this.rowStyle}> 
              {this.state.animals.filter(animal =>
              animal.photos.length).map(animal => 
                <div style={this.cardStyle} className="col-lg-3">
                  <PetCard 
                    name={animal.name} 
                    image={animal.photos[0] ? animal.photos[0].small : ''}
                    species={animal.species} 
                    size={animal.size} 
                    gender={animal.gender} 
                    breed={animal.breeds.primary} 
                    />
                  <Link to= "/confirmation">SELECT PET</Link>
                </div>
              )}
            </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}
}

export default App;