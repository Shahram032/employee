import React, { useState } from "react";
import PropTypes from "prop-types";
import key from "../../assets/svg/lock.svg";

import "./login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token.data.passedUser.accessToken);
    sessionStorage.setItem("token", token.data.passedUser.accessToken);
    window.location.reload();
    console.log(token.data.passedUser.accessToken);
  };

  return (
    <div dir="ltr">
      <form
        name="loginForm"
        className="form-login border rounded"
        onSubmit={handleSubmit}
      >
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
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          className="form-control form-control-sm mb-2"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-outline-primary w-100">
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Login
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
