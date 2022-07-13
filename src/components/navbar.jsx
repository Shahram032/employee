import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar sticky-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sticky top
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
