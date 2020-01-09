import React from "react";
import { Menu } from "semantic-ui-react";
import SearchBar from "./Search.js";
import "./Menu.css";

class MyMenu extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="mainMenu">
        <Menu.Item
          name="CATALOG"
          active={activeItem === "CATALOG"}
          onClick={this.handleItemClick}
        >
          CATALOG
        </Menu.Item>

        <Menu.Item
          name="HOME"
          active={activeItem === "HOME"}
          onClick={this.handleItemClick}
        >
          HOME
        </Menu.Item>

        <SearchBar />
        <div className="logo">
          <div className="logo__icon"></div>
          <div className="logo__text">makeshift</div>
        </div>
      </Menu>
    );
  }
}

export default MyMenu;
