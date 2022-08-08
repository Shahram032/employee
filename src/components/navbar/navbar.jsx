import React, { Component } from "react";
import "./navbar.css";
import CustomIcon from "../menu/icons/customIcon";
import axios from "axios";
import { toast } from "react-toastify";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      mainMenus: [],
    };
  }

  headers = {
    "Content-Type": "application/json",
    Authorization: "token " + this.props.getUser().accessToken,
  };

  componentDidMount() {
    this.menus();
  }

  menus = async () => {
    this.setState({
      loading: true,
    });
    axios
      .get(
        "http://localhost:8080/api/tools/access/main_manu/" +
          this.props.getUser().id,
        { headers: this.headers }
      )
      .then((response) => {
        this.setState({
          loading: false,
          mainMenus: response.data.data.mainMenus,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
        });
        toast.error(error.message);
      });
  };

  ListItem = (props) => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.value}
        </a>
      </li>
    );
  };

  MenuList = (props) => {
    const menus = props.menus;
    return (
      <ul className="navbar-nav">
        {menus.map((menu) => (
          <this.ListItem key={menu.id.toString()} value={menu.caption} />
        ))}
      </ul>
    );
  };

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
            <this.MenuList menus={this.state.mainMenus} />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
