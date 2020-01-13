import React from "react";
import "./MenuBody.css";

class MenuBody extends React.Component {
  render() {
    return (
      <div className="menuBody">
        <div className="menuDesc">
          <h2 className="menuDesc__heading">3D Printing for Home DIY</h2>
          <p className="menuDesc__subheading">
            With the help of our growing community of makers and designers,
            search our free catalog of 3D print files to meet any of your
            household needs.
          </p>
        </div>
      </div>
    );
  }
}

export default MenuBody;
