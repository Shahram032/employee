import React, { Component } from "react";
import axios from "axios";
import key from "../../assets/svg/lock.svg";
import "./login.css";
import { toast } from "react-toastify";
import Translate from "../language/translate";

class Login extends Component {
  loginForm = { username: "", password: "" };

  constructor(props) {
    super(props);
    this.click.bind(this);
    this.state = {
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
            <Translate>Login To System</Translate>
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
              <input type="checkbox" value="remember-me" />
              <Translate>Remember me</Translate>
            </label>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary w-100"
            onClick={this.click}
          >
            {spin}
            <Translate>Login</Translate>
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
        this.props.setUser(response.data.data.passedUser);
        //window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
        });
        toast.error(<Translate>{error.message}</Translate>);
      });
  };
}

export default Login;
