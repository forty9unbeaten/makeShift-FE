import React, { Component } from "react";
import "./Register.css";
import { Icon } from "semantic-ui-react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      fName: "",
      lName: "",
      bday: "",
      match: false
    };
  }

  handleChange = event => {
    switch (event.target.name) {
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "username":
        this.setState({ username: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      case "fName":
        this.setState({ fName: event.target.value });
        break;
      case "lName":
        this.setState({ lName: event.target.value });
        break;
      case "bday":
        this.setState({ bday: event.target.value });
    }
  };

  checkPasswordMatch = event => {
    if (event.target.value === this.state.password) {
      this.setState({ match: true });
      return;
    }
    this.setState({ match: false });
  };

  render = () => {
    return (
      <React.Fragment>
        <h2 className="Register__header">
          <div className="Register__text">MAKESHIFT</div> Account Registration
        </h2>
        <div className="Register__container">
          <div className="Register__benefits">
            <h3 className="Register__benefitsHead">Simplicity</h3>
            <p>
              All of your favorite designs in one place. Save your favorites and
              make the most of your 3D printer!
            </p>
            <h3 className="Register__benefitsHead">Community</h3>
            <p>
              Browse, save, rate and review designs offered by other members in
              our diverse design catalog!
            </p>
            <h3 className="Register__benefitsHead">Opportunity</h3>
            <p>
              Post your own designs and make them immediately available to other
              memebrs across our design community!
            </p>
          </div>
          <form className="Register__form">
            <div className="Register__input">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="123abc@example.com"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="Register__input">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                autoComplete="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
            <div className="Register__input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <div className="Register__input">
              <div className="Register__confirm">
                <label htmlFor="confirm">Confirm Password</label>
                <Icon
                  name={this.state.match ? "check" : "x"}
                  size="small"
                  color={this.state.match ? "green" : "red"}
                />
              </div>
              <input
                name="confirm"
                type="password"
                autoComplete="off"
                onChange={this.checkPasswordMatch}
              />
            </div>
            <div className="Register__input">
              <label htmlFor="fName">First Name</label>
              <input
                name="fName"
                type="text"
                autoComplete="given-name"
                onChange={this.handleChange}
                value={this.state.fName}
              />
            </div>
            <div className="Register__input">
              <label htmlFor="lName">Last Name</label>
              <input
                name="lName"
                type="text"
                autoComplete="family-name"
                onChange={this.handleChange}
                value={this.state.lName}
              />
            </div>
            <div className="Register__input">
              <label htmlFor="bday">Birthday</label>
              <input
                name="bday"
                type="date"
                autoComplete="bday"
                placeholder="MM/DD/YYYY"
                onChange={this.handleChange}
                value={this.state.bday}
              />
            </div>
            <div className="Register__button">Submit</div>
          </form>
        </div>
      </React.Fragment>
    );
  };
}

export default Register;
