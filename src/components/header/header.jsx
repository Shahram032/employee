import React, { Component } from "react";
import "./header.css";
import CustomIcon from "../menu/icons/customIcon";
import logo from "../../assets/shah.jpg";
import Lang from "../util/lang";

class Header extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <header>
        <div className="px-3 py-2 bg-muted mb-1 rounded shadow">
          <div className="container btn-toolbar justify-content-between">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="dropdown text-end">
                <a
                  href="#"
                  className="d-block link-dark text-decoration-none dropdown-toggle text-dark"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src={logo}
                    alt="mdo"
                    className="rounded-circle"
                    width="32"
                    height="32"
                  />
                  <label className="text-dark me-2 fw-bold">
                    {this.props.getUser().person.name +
                      " " +
                      this.props.getUser().person.family}
                  </label>
                </a>

                <ul
                  className="dropdown-menu text-small dpmenu"
                  data-popper-placement="bottom-start"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="#" className="nav-link text-secondary">
                    {CustomIcon("FaBell", 25, "#511d5f")}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {CustomIcon("FaEnvelope", 25, "#511d5f")}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {CustomIcon("FaClock", 25, "#511d5f")}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {CustomIcon("FaCogs", 25, "#511d5f")}
                  </a>
                </li>
                <li>
                  <a className="nav-link text-white" onClick={this.logout}>
                    {CustomIcon("FaPowerOff", 25, "#511d5f")}
                  </a>
                </li>
              </ul>
            </div>
            <div>{Lang()}</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
