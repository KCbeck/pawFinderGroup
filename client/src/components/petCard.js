import React, {Component} from 'react';
import './petCard.css';

const petfinderAPI = '';

class petCard extends Component{
    render() {
        let Name = (this.props.name);
        let imgSrc = `${petfinderAPI}${Name}.gif`;
        return (
            <div className="petCard">
                <h1 className="">{this.props.name}</h1>
                <img className="" src={imgSrc}/>
                <div className=""></div>
                <div className=""></div> 
            </div>
        );
    }
}

export default petCard;