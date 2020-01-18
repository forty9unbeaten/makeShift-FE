import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="Footer__container">
        <div className="Footer__logo">
          <div className="Footer__logoIcon"></div>
          <div className="Footer__logoText">MAKESHIFT</div>
        </div>
        <div className="Footer__copyright">
          <FontAwesomeIcon icon={faCopyright} className="Footer__copyIcon" />
          <p className="Footer__copyText">2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
