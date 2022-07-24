import React, { Component } from "react";
import "./menu.css";
import CustomIcon from "./icons/customIcon";

class Menu extends Component {
  state = {};

  render() {
    return (
      <div className="menu-header flex-shrink-0 p-3 shadow rounded">
        {this.getHeader("سامانه کارگزینی")}
        {this.getMenu("اطلاعات پایه", "base")}
        {this.getMenu("عملیات اصلی", "main")}
        {this.getMenu("گزارشات", "rep")}
      </div>
    );
  }

  getHeader(caption) {
    return (
      <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        {CustomIcon("FaUserAlt", 25, "Orange")}
        <span className="fs-6 fw-bold m-2">{caption}</span>
      </a>
    );
  }

  getMenu(caption, cat) {
    return (
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target={"#" + cat}
            aria-expanded="false"
          >
            <label className="me-1">{caption}</label>
          </button>
          <div className="collapse" id={cat}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="#" className="link-dark rounded">
                  موسسات آموزشی
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  رشته های تحصیلی
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  انواع بکارگیری
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    );
  }
}

export default Menu;
