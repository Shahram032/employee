import React, { Component } from "react";
import "./menu.css";
import CustomIcon from "./icons/customIcon";
import axios from "axios";
import { toast } from "react-toastify";
import Translate, { GetTranslate } from "../language/translate";
import LangContext from "../language/lang";

class Menu extends Component {
  static contextType = LangContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sysMenus: [],
      sys: "",
    };
  }

  headers = {
    "Content-Type": "application/json",
    Authorization: "token " + this.props.getUser().accessToken,
  };

  componentDidMount() {
    this.sysMenus();
  }

  sysMenus = async () => {
    const baseUrl = this.context.baseUrl;
    this.setState({
      loading: true,
    });
    axios
      .get(
        baseUrl +
          "tools/access/sys_manu/" +
          this.props.getUser().id +
          "/" +
          this.props.getSys(),
        { headers: this.headers }
      )
      .then((response) => {
        this.setState({
          loading: false,
          sysMenus: response.data.data.sysMenus,
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

  render() {
    if (this.state.sys != this.props.getSys()) {
      this.sysMenus();
      this.state.sys = this.props.getSys();
    }
    return (
      <div className="col col-3 menu-header flex-shrink-0 p-3 shadow rounded overflow-auto">
        {this.getHeader(this.props.getSys() + " System")}
        {this.getMenu("Basic Information", "1")}
        {this.getMenu("Side Operations", "2")}
        {this.getMenu("Main Operations", "3")}
        {this.getMenu("Reports", "4")}
      </div>
    );
  }

  getHeader(caption) {
    return (
      <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        {CustomIcon("FaUserAlt", 25, "Orange")}
        <span className="fs-6 fw-bold m-2">
          <Translate>{caption}</Translate>
        </span>
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
            data-bs-target={"#menu_" + cat}
            aria-expanded="false"
          >
            <label className="me-1">
              <Translate>{caption}</Translate>
            </label>
          </button>
          <div className="collapse" id={"menu_" + cat}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <this.subMenu cat={cat} />
            </ul>
          </div>
        </li>
      </ul>
    );
  }

  setContent = (content) => {
    this.props.setContent(content);
  };

  subMenu = (props) => {
    let sub = [];
    for (var menu of this.state.sysMenus) {
      if (menu.category === parseInt(props.cat)) sub.push(menu);
    }
    if (sub.length > 0)
      return (
        <>
          {sub.map((sub) => (
            <li key={sub.id}>
              <a
                className="link-dark rounded"
                onClick={() => this.setContent(sub.entityName)}
              >
                <Translate onClick={() => this.setContent(sub.entityName)}>
                  {sub.entityName}
                </Translate>
              </a>
            </li>
          ))}
        </>
      );
    else return "";
  };
}

export default Menu;
