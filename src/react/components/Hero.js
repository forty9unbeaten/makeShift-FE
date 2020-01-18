import React from "react";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero__container">
        <div className="hero__description">
          <h2 className="hero__descriptionHead">3D Printing for Home DIY</h2>
          <p className="hero__descriptionSubHead">
            With the help of our growing community of makers and designers,
            search our free catalog of 3D print files to meet any of your
            household needs.
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
