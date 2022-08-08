import React, { Component } from "react";
import Login from "../src/components/login/login";
import Menu from "./components/menu/menu";
import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Table from "./components/table/table";
import Footer from "./components/footer/footer";
import Top from "./components/stickytop/top";
import Toolbar from "./components/toolbar/toolbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Child from "./child";

class App extends Component {
  constructor(props) {
    super(props);
    this.setStateOfParent.bind(this);
    this.setUser.bind(this);
    this.getUser.bind(this);
    this.logout.bind(this);
    this.getDictionary.bind(this);
    this.state = { title: "Update me", dictionary: {} };
  }

  getDictionary = (lang) => {
    return this.state.dictionary;
  };

  setStateOfParent = (newTitle) => {
    this.setState({ title: newTitle });
    this.setState({ user: undefined });
  };

  setUser = (user) => {
    this.setState({ user: user });
    localStorage.setItem("user", JSON.stringify(user));
  };

  getUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
  };

  logout = () => {
    localStorage.removeItem("user");
    this.setState({});
  };

  render() {
    if (!this.getUser())
      return (
        <div>
          <ToastContainer />
          <Login getDictionary={this.getDictionary} setUser={this.setUser} />
        </div>
      );
    if (this.getUser())
      return (
        <React.Fragment>
          <ToastContainer />
          <Top getDictionary={this.getDictionary} />
          <Header
            getDictionary={this.getDictionary}
            logout={this.logout}
            getUser={this.getUser}
          />
          <NavBar getDictionary={this.getDictionary} getUser={this.getUser} />
          <div className="row m-1">
            <Menu getDictionary={this.getDictionary} getUser={this.getUser} />
            <Table getDictionary={this.getDictionary} />
          </div>
          <Toolbar getDictionary={this.getDictionary} />
          <Footer getDictionary={this.getDictionary} />
        </React.Fragment>
      );
  }
}

export default App;
/*
import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.setStateOfParent.bind(this);
    this.state = { title: "Update me" };
  }

  setStateOfParent = (newTitle) => {
    this.setState({ title: newTitle });
  };

  render() {
    return (
      <React.Fragment>
        <h1> {this.state.title} </h1>
        // Passing the setStateOfParent function // in child as a prop
        <Child setStateOfParent={this.setStateOfParent} />
      </React.Fragment>
    );
  }
}

export default Parent;

/*
import React from "react";
import "./App.css";
import Login from "./components/login/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Menu from "./components/menu/menu";
import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Table from "./components/table/table";
import Footer from "./components/footer/footer";
import Top from "./components/stickytop/top";
import Toolbar from "./components/toolbar/toolbar";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  return tokenString;
}

function App() {
  const token = getToken();
  const notify = () => toast("Wow so easy!");

  if (!token) {
    return (
      <div className="App">
        <ToastContainer />
        <Login />
      </div>
    );
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <Top />
      <Header />
      <NavBar />
      <div className="row m-1">
        <Menu />
        <Table />
      </div>
      <Toolbar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
*/
