import React from "react";

import "./MenuBody.css";

class MyMenuBody extends React.Component {
  render() {
    return (
      <div className="menuBody">
        <div className="menuDesc">
          <h2>3D Printing for Home DIY</h2>
          <div className="webDescription">
            <p>
              With the help of our growing community of makers and designers,
              search our free catalog of 3D print filesto meet any of your
              household needs.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMenuBody;
