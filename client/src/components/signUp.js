
// import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, {Component} from 'react';
import "./signUp.css";
// ​
// ​
class FormPage extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      password: "",

    };

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;

      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();

      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        zipCode: ""
      });
    };

    

    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div className="FormPage">
          <Container>
            <Row>
              <Col md="12">
              Hello {this.state.firstName} {this.state.lastName}
                <form className="form">
                  <input class="input"
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                <div class="gap">
                </div>
                  <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />
                  <div class="gap">
                </div>
                  <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type= "email"
                    pattern=".+@globex.com"
                    size="30"
                    placeholder="email@email.com"
                    required
                  />
                  <div class="gap">
                </div>
                  <input
                    value={this.state.zipCode}
                    name="zipCode"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Zipcode"
                  />
                <div class="gap">
                </div>
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="pa$$word"
                  />
                  <div class="gap">
                </div>
                    <Button onClick={this.handleFormSubmit} >Submit</Button>
                    {/* incorporate <Link to = "/cards">Submit</Limk> into button */}
                  </form>
                  {/* <Link to = "/logIn">Already a Member? LOGIN HERE</Link> */}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }

export default FormPage;