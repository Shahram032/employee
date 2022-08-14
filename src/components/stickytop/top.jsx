import React, { Component } from "react";
import Translate from "../language/translate";
import "./top.css";

class Top extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <label className=" text-secondary fw-bold">
            <Translate>Integrated Management System</Translate>
          </label>
        </div>
      </nav>
    );
  }
}

export default Top;
