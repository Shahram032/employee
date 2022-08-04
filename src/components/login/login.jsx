import React, { Component, useState } from "react";
import axios from "axios";
import key from "../../assets/svg/lock.svg";
import "./login.css";
import { toast } from "react-toastify";

export default class Login extends Component {
  loginForm = { username: "", password: "" };
  constructor(props) {
    super(props);
    this.state = this.state = {
      loading: false,
    };
  }

  render() {
    let spin;
    if (this.state.loading) {
      spin = (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      );
    }

    return (
      <div dir="ltr">
        <form name="loginForm" className="form-login border rounded">
          <div className="d-flex justify-content-center">
            <img src={key} alt="" height="54" width="54" className="mb-4" />
          </div>
          <h4 className="d-flex justify-content-center h4 mb-3 font-weight-normal text-primary">
            Login To System
          </h4>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control form-control-sm mb-2"
            placeholder="User Name"
            required
            autoFocus
            onChange={(e) => (this.loginForm.username = e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            className="form-control form-control-sm mb-2"
            placeholder="Password"
            required
            onChange={(e) => (this.loginForm.password = e.target.value)}
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary w-100"
            onClick={this.click}
          >
            {spin}
            Login
          </button>
        </form>
      </div>
    );
  }

  click = async () => {
    this.setState({
      loading: true,
    });
    axios
      .post("http://localhost:8080/api/login", this.loginForm)
      .then((response) => {
        this.setState({
          loading: false,
        });
        sessionStorage.setItem(
          "token",
          response.data.data.passedUser.accessToken
        );
        toast.success("Wellcome ");
        setTimeout(2000);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
        });
        toast.error(error.message);
      });
  };
}
