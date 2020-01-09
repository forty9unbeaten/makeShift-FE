import React from "react";
// import { Item } from 'semantic-ui-react'
import "./MenuBody.css";

const description = [
  "Website Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec. Integer malesuada nunc vel risus commodo viverra maecenas."
].join(" ");

// const MenuBody = () => (
//     <Item.Group>
//         <Item>
//             {/* <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
//             <Item.Content>
//                 {/* <Item.Header as='a'>Cute Dog</Item.Header> */}
//                 <Item.Description>
class MyMenuBody extends React.Component {
  render() {
    return (
      <div className="menuBody">
        <div className="menuDesc">
          <h2>Header</h2>
          <div className="webDescription">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
//                 </Item.Description>
//             </Item.Content>
//         </Item>
//     </Item.Group>
// )

export default MyMenuBody;
