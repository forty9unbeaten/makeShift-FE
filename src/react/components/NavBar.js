import React from "react";
import { Menu } from "semantic-ui-react";
import SearchBar from "./Search.js";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  state = { activeItem: "HOME" };

  handleClick = event => {
    const clickedLink = event.target.innerHTML;
    this.setState({ activeItem: clickedLink });
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
            to="/login"
            className="navbar__link"
            activeClassName="active"
          >
            Login
          </NavLink>
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
        </div>
      </Menu>
    );
  }
}

export default NavBar;
