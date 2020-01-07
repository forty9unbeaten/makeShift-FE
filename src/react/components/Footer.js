import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faCopyright } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logo">
          <FontAwesomeIcon icon={faCube} className="logo__icon" />
          <p className="logo__text">Website Name</p>
        </div>
        <div className="copyright">
          <FontAwesomeIcon icon={faCopyright} className="copyright__icon" />
          <p className="copyright__text">2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
