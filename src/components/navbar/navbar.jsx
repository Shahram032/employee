import React, { Component } from "react";
import "./navbar.css";
import logo from "../../assets/shah.jpg";
import CustomIcon from "../menu/icons/customIcon";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="row navRow bg-dark">
        <div className="col-md-4">
          <div className="row userPan">
            <div className="col-md-4 text-white">
              <img src={logo} className="avatar-img rounded" alt="..." />
              <label className="me-2 text-info">شهرام آبائی</label>
            </div>
            <div className="col-md-1">
              <div class="text-center">{CustomIcon("FaBell", 25, "white")}</div>
            </div>
            <div className="col-md-1">
              <div class="text-center">
                {CustomIcon("FaEnvelope", 25, "white")}
              </div>
            </div>
            <div className="col-md-1">
              <div class="text-center">
                {CustomIcon("FaClock", 25, "white")}
              </div>
            </div>
            <div className="col-md-1">
              <div class="text-center">
                {CustomIcon("FaPowerOff", 25, "white")}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <nav className="navbar navbar-expand-lg bg-dark">
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
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-warning"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      اداری
                    </a>
                    <ul
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          کارگزینی
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          حضور و غیاب
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          ارزشیابی
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-warning"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      مالی
                    </a>
                    <ul
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          کارگزینی
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          حضور و غیاب
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          ارزشیابی
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-warning"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      پشتیبانی
                    </a>
                    <ul
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          کارگزینی
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          حضور و غیاب
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          ارزشیابی
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-warning"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      برنامه ریزی
                    </a>
                    <ul
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          کارگزینی
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          حضور و غیاب
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          ارزشیابی
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-warning"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      تخصصی
                    </a>
                    <ul
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          کارگزینی
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          حضور و غیاب
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-warning" href="#">
                          ارزشیابی
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-4 logoDiv">
          <div className="fs-4">
            <label className="ms-1">SegalSoft</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-mastodon"
              viewBox="0 0 16 16"
            >
              <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
