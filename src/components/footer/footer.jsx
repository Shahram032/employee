import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar  fixed-bottom navbar-light bg-dark">
        <div className="container-fluid justify-content-center footer">
          <label className=" text-warning fw-bold">
            CopyWrite © کلیه حقوق این سامانه متعلق به شرکت ایده های نرم افزاری
            نکوسافت است
          </label>
        </div>
      </nav>
    );
  }
}

export default Footer;
