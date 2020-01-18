import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
// import { store } from "../../redux";

class NotFound extends React.Component {
  render() {
    return (
      <div className="Error__container">
        <h1 className="Error__heading">404 Error</h1>
        <div className="Error__gif" />
        <Link className="Error__homeLink" to="/">
          Home
        </Link>
        <h2 className="Error__description">
          Ouch. This is embarassing. Looks like that page doesn't exist yet...
        </h2>
      </div>
    );
  }
}

export default NotFound;
