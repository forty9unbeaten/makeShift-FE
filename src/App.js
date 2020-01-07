import React from 'react';
import { Sidebar, Menu, Icon, Checkbox } from "semantic-ui-react"
import "./Sidebar.css"

function App() {
  return (
    <div id= "sidebar">
     <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Checkbox label='Make my profile visible' />
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

    </div>
  );
}

export default App;
