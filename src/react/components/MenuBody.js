import React from "react";
import { Item } from "semantic-ui-react";
import "./MenuBody.css";

const description = ["Website Description"].join(" ");

const MenuBody = () => (
  <Item.Group>
    <Item>
      {/* <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
      <Item.Content>
        {/* <Item.Header as='a'>Cute Dog</Item.Header> */}
        <Item.Description>
          <p>{description}</p>
          <p>3d printer catalogue</p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default MenuBody;
