import React, { Component } from "react";
import axios from 'axios';
// import { Card } from 'react-bootstrap';
import "./card.css"

class PetCard extends Component {
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
  <div style={this.rowStyle}> 
                        {this.state.animals.map(animal => 
                          <div >
                            <div style={this.cardStyle} className="col-lg-3"><PetCard name={animal.name} image={animal.photos[0] ? animal.photos[0].small : ''} species={animal.species} size={animal.size} gender={animal.gender} breed={animal.breeds.primary} /></div>
                          </div>
                        )}
                      </div>
   )
}; 
}
export default PetCard