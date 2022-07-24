import React, { Component } from "react";
import "./navbar.css";
import CustomIcon from "../menu/icons/customIcon";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light nav rounded shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {CustomIcon("FaBars", 25, "Orange")}
            </span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  اداری
                </a>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      کارگزینی
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      حضور و غیاب
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ارزشیابی
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مالی
                </a>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      کارگزینی
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      حضور و غیاب
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ارزشیابی
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  پشتیبانی
                </a>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      کارگزینی
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      حضور و غیاب
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ارزشیابی
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  برنامه ریزی
                </a>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      کارگزینی
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      حضور و غیاب
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ارزشیابی
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  تخصصی
                </a>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      کارگزینی
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      حضور و غیاب
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ارزشیابی
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
