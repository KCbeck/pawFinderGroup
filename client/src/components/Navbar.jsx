import React, { Component } from 'react';
import { Navbar, Nav, Link} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../logo.png"

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.logo>
                <img src={logo} id="AppLogo" alt="logo" />
              </Navbar.logo>
              <Navbar.Brand href="/">PetRoolette</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#Pets">Pets</Nav.Link>
              {/* <Nav.Link href="#">Pricing</Nav.Link> */}
              </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}
            </Navbar>
        )
    }
}