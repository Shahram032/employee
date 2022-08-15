import React, { Component } from "react";
import "./menu.css";
import CustomIcon from "./icons/customIcon";
import axios from "axios";
import { toast } from "react-toastify";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sysMenus: [],
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
    this.setState({
      loading: true,
    });
    axios
      .get(
        "http://localhost:8080/api/tools/access/sys_manu/" +
          this.props.getUser().id +
          "/" +
          this.props.getSys(),
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

  render() {
    //this.sysMenus();
    return (
      <div className="col col-3 menu-header flex-shrink-0 p-3 shadow rounded overflow-auto">
        {this.getHeader("سامانه کارگزینی")}
        {this.getMenu("اطلاعات پایه", "base")}
        {this.getMenu("عملیات اصلی", "main")}
        {this.getMenu("عملیات اصلی", "main")}
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
