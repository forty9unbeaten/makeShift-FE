import React from "react";
import { Menu, Modal } from "semantic-ui-react";
import SearchBar from "./Search.js";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "HOME",
      loginOpen: false,
      username: "",
      password: ""
    };
  }

  handleClick = event => {
    const clickedLink = event.target.innerHTML;
    this.setState({ activeItem: clickedLink });
  };

  handleChange = event => {
    if (event.target.name === "username") {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  openLogin = () => {
    this.setState({ loginOpen: true });
  };

  closeLogin = () => {
    this.setState({ loginOpen: false });
  };

  render() {
    return (
      <Menu className="navbar__mainMenu">
        <div className="navbar__logo">
          <NavLink exact to="/" className="navbar__logoLink">
            <div className="navbar__logoIcon" />
            <div className="navbar__logoText">MAKESHIFT</div>
          </NavLink>
        </div>
        <div className="navbar__searchBar">
          <SearchBar />
        </div>
        <div className="navbar__linksWrapper">
          <NavLink
            exact
            to="/"
            className="navbar__link"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/catalog"
            className="navbar__link"
            activeClassName="active"
          >
            Catalog
          </NavLink>
          <Modal
            trigger={
              <div onClick={this.openLogin} className="navbar__link">
                Login/Register
              </div>
            }
            open={this.state.loginOpen}
            onClose={this.closeLogin}
            className="Login__modal"
          >
            <Modal.Header className="Login__header">Log In</Modal.Header>
            <Modal.Content>
              <form className="Login__form">
                <div className="Login__input">
                  <label htmlFor="username">Username:</label>
                  <input
                    name="username"
                    type="text"
                    autoComplete="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </div>
                <div className="Login__input">
                  <label htmlFor="password">Password:</label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </div>
                <div className="Login__button" onClick={this.closeLogin}>
                  Submit
                </div>
              </form>
              <div className="Login__register">
                Don't have an account?
                <br />
                <Link to="/register" onClick={this.closeLogin}>
                  Register
                </Link>
              </div>
            </Modal.Content>
          </Modal>
        </div>
      </Menu>
    );
  }
}

export default NavBar;
