import React, { Component } from "react";
import "./navbar.css";
import CustomIcon from "../menu/icons/customIcon";
import axios from "axios";
import { toast } from "react-toastify";
import LangContext from "../language/lang";
import Translate from "../language/translate";

class NavBar extends Component {
  static contextType = LangContext;
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
    const baseUrl = this.context.baseUrl;
    this.setState({
      loading: true,
    });
    axios
      .get(baseUrl + "tools/access/main_manu/" + this.props.getUser().id, {
        headers: this.headers,
      })
      .then((response) => {
        this.setState({
          loading: false,
          mainMenus: response.data.data.mainMenus,
        });
        this.props.setSystems(response.data.data.mainMenus);
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
      <li className="nav-item dropdown" key={"main_li_" + props.menuId}>
        <a
          key={"main_a_" + props.menuId}
          className="nav-link dropdown-toggle"
          id={"navbarDropdown" + props.menuId}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Translate>{props.value}</Translate>
        </a>
        <this.subMenu sub={props.sub} mainMenu={props}></this.subMenu>
      </li>
    );
  };

  subMenu = (props) => {
    const sub = props.sub;
    if (sub.length > 0)
      return (
        <ul
          className="dropdown-menu"
          key={"main_menu_ul_" + props.mainMenu.menuId}
        >
          {sub.map((sub) => (
            <li key={sub.id}>
              <a
                className="dropdown-item"
                href="#"
                id={"a_" + sub.id}
                onClick={() => this.setSys(sub.subSystem)}
              >
                <Translate>{sub.caption}</Translate>
              </a>
            </li>
          ))}
        </ul>
      );
    else return "";
  };

  setSys = (sys) => {
    this.props.setSys(sys);
  };

  MenuList = (props) => {
    const menus = props.menus;
    return (
      <ul className="navbar-nav">
        {menus.map((menu) => (
          <this.ListItem
            key={"menu_" + menu.id}
            menuId={menu.id}
            value={menu.caption}
            sub={menu.subMenus}
          />
        ))}
      </ul>
    );
  };

  render() {
    if (this.state.loading)
      return (
        <div>
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
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
          </nav>
        </div>
      );

    return (
      <div>
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
      </div>
    );
  }
}

export default NavBar;
