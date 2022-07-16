import React, { Component } from "react";
import "./menu.css";
import CustomIcon from "./icons/customIcon";

class Menu extends Component {
  state = {};

  render() {
    return (
      <div className="menu-header flex-shrink-0 p-3 bg-white">
        {this.getHeader("سامانه جامع مدیریت منابع انسانی")}
      </div>
    );
  }

  getHeader(caption) {
    return (
      <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        {CustomIcon("FaHome", 25, "Pruple")}
        <span className="fs-6 fw-bold m-2">{caption}</span>
      </a>
    );
  }
}

export default Menu;
