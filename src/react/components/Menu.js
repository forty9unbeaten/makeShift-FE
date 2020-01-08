import React from "react";
import { Menu } from "semantic-ui-react";
import "./Menu.css";

class MyMenu extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="mainMenu">
        <Menu.Item
          name="Category1"
          active={activeItem === "Category1"}
          onClick={this.handleItemClick}
        >
          Category 1
        </Menu.Item>

        <Menu.Item
          name="Category2"
          active={activeItem === "Category2"}
          onClick={this.handleItemClick}
        >
          Category 2
        </Menu.Item>

        {/* <Menu.Item
          name='Category3'
          active={activeItem === 'Category3'}
          onClick={this.handleItemClick}
        >
          Category 3
        </Menu.Item> */}

        <div className="webName">Website Name</div>
        <div className="logoPlace"></div>
      </Menu>
    );
  }
}

export default MyMenu;
