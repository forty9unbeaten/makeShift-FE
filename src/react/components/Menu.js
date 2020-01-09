<<<<<<< HEAD:src/react/components/MyMenu.js
import React from 'react'
import { Menu } from 'semantic-ui-react'
import  SearchBar from './Search.js'
import "./MyMenu.css"

=======
import React from "react";
import { Menu } from "semantic-ui-react";
import "./Menu.css";
>>>>>>> 672ab4db22b630b7509ad79b6fa1966c27e1ab5e:src/react/components/Menu.js

class MyMenu extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="mainMenu">
        <Menu.Item
<<<<<<< HEAD:src/react/components/MyMenu.js
          name='CATALOG'
          active={activeItem === 'CATALOG'}
=======
          name="Category1"
          active={activeItem === "Category1"}
>>>>>>> 672ab4db22b630b7509ad79b6fa1966c27e1ab5e:src/react/components/Menu.js
          onClick={this.handleItemClick}
        >
          CATALOG
        </Menu.Item>


        <Menu.Item
<<<<<<< HEAD:src/react/components/MyMenu.js
          name='HOME'
          active={activeItem === 'HOME'}
=======
          name="Category2"
          active={activeItem === "Category2"}
>>>>>>> 672ab4db22b630b7509ad79b6fa1966c27e1ab5e:src/react/components/Menu.js
          onClick={this.handleItemClick}
        >
          HOME
        </Menu.Item>

       <SearchBar />

        <div className="webName">Website Name</div>
        <div className="logoPlace"></div>
      </Menu>
    );
  }
}

export default MyMenu;
