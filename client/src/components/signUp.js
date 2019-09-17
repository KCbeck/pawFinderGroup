<<<<<<< HEAD
// import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

import React, {Component} from 'react';
import "./signUp.css";
=======
import React from "react";
import { Container, Row, Col, button } from 'react-bootstrap';
import React, {Component} from 'react';


>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
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
<<<<<<< HEAD

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;

=======
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
<<<<<<< HEAD

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();

=======
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
  
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
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
        <Container>
          <Row>
            <Col md="12">
            Hello {this.state.firstName} {this.state.lastName}
              <form className="form">
<<<<<<< HEAD
                <input class="input"
=======
                
                <input
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
               />
<<<<<<< HEAD
               <div class="gap">
               </div>
=======
              <br>
              </ br>
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
                <input
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                />
<<<<<<< HEAD
                 <div class="gap">
               </div>
=======
                <br>
                
                </ br>
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
                <input
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type= "email"
                  pattern=".+@globex.com"
                  size="30"
<<<<<<< HEAD
                  placeholder="email@email.com"
                  required
                />
                <div class="gap">
               </div>
=======
                  placeholder="President@whitehouse.gov"
                  required
                />
                <br>
                </ br>
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
                <input
                  value={this.state.zipCode}
                  name="zipCode"
                  onChange={this.handleInputChange}
                  type="number"
                  placeholder="Zipcode"
                />
<<<<<<< HEAD
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
                  <Button onClick={this.handleFormSubmit}>Submit</Button>
=======
                <br>
                </ br>
                  <button onClick={this.handleFormSubmit}>Submit</button>
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
                </form>
             </Col>
          </Row>
        </Container>
      );
    }
  }
<<<<<<< HEAD

export default FormPage;
=======
  
export default FormPage;
// Collapse





//      
//             <p className="h4 text-center mb-12">Sign up</p>
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Your name
//             </label>
//             <input
//               type="text"
//               id="defaultFormRegisterNameEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
//               Your email
//             </label>
//             <input
//               type="email"
//               id="defaultFormRegisterEmailEx"
//               className="form-control"
//             />
//             <br />
//             <label
//               htmlFor="defaultFormRegisterConfirmEx"
//               className="grey-text"
//             >
//               Confirm your email
//             </label>
//             <input
//               type="email"
//               id="defaultFormRegisterConfirmEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormRegisterZipEx" className="grey-text">
//               zipcode
//             </label>
//             <input
//               type="Zipcode"
//               id="defaultFormRegisterZipEx"
//               className="form-control"
//             />
//             <label
//               htmlFor="defaultFormRegisterPasswordEx"
//               className="grey-text"
//             >
//               Your password
//             </label>
//             <input
//               type="password"
//               id="defaultFormRegisterPasswordEx"
//               className="form-control"
//             />
//             <div className="text-center mt-4">
//               <Button color="unique" type="submit">
//                 Register
//               </Button>
//             </div>
//           </form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FormPage;
>>>>>>> 5c5165cf102064cb4bd6d430d20f3d8441e142f4
