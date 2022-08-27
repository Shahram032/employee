import React, { Component } from "react";
import Login from "../src/components/login/login";
import Menu from "./components/menu/menu";
import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Table from "./components/table/table";
import Footer from "./components/footer/footer";
import Top from "./components/stickytop/top";
import Toolbar from "./components/toolbar/toolbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LangContext from "./components/language/lang";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.setStateOfParent.bind(this);
    this.setUser.bind(this);
    this.getUser.bind(this);
    this.logout.bind(this);
    this.changeLang.bind(this);
    this.setSys.bind(this);
    this.setContent.bind(this);
    this.getSys.bind(this);
    this.setSystems.bind(this);
    this.getSysIcon.bind(this);
    this.state = {
      lang: "fa",
      sys: "dashboard",
      content: "dashboard",
      baseUrl: "http://localhost:8080/api/",
      systems: [],
    };
  }

  componentDidMount() {
    if (this.getUser())
      this.setState({
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + this.getUser().accessToken,
        },
      });
  }

  changeLang = (lang) => {
    //console.log(lang);
    this.setState({ lang: lang });
  };

  setStateOfParent = (newTitle) => {
    this.setState({ title: newTitle });
    this.setState({ user: undefined });
  };

  setUser = (user) => {
    this.setState({
      user: user,
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + user.accessToken,
      },
    });
    localStorage.setItem("user", JSON.stringify(user));
  };

  getUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
  };

  setSys = (sys) => {
    this.setState({ sys: sys, content: "dashboard" });
  };

  setSystems = (systems) => {
    let tmp = [];
    this.state.systems = [];
    for (var item of systems) {
      for (var sub of item.subMenus) {
        tmp[sub.subSystem] = sub.icon;
      }
    }
    this.setState({ systems: tmp });
  };

  getSysIcon = (sys) => {
    let icon = this.state.systems[sys];
    return icon;
  };

  setContent = (content) => {
    this.setState({ content: content });
  };

  getSys = () => {
    return this.state.sys;
  };

  logout = () => {
    localStorage.removeItem("user");
    this.setState({});
  };

  getContent = () => {
    if (this.state.sys == "dashboard" && this.state.content == "dashboard")
      return (
        <div className="row m-1">
          <Dashboard />
        </div>
      );
    else if (this.state.sys != "dashboard" && this.state.content == "dashboard")
      return (
        <div className="row m-1">
          <Menu
            getUser={this.getUser}
            getSys={this.getSys}
            setContent={this.setContent}
            getSysIcon={this.getSysIcon}
          />
        </div>
      );
    else
      return (
        <div className="row m-1">
          <Menu
            getUser={this.getUser}
            getSys={this.getSys}
            setContent={this.setContent}
            getSysIcon={this.getSysIcon}
          />
          <Table />
        </div>
      );
  };

  render() {
    if (!this.getUser())
      return (
        <div>
          <ToastContainer />
          <Login setUser={this.setUser} />
        </div>
      );
    if (this.getUser())
      return (
        <React.Fragment>
          <LangContext.Provider value={this.state}>
            <ToastContainer />
            <Top />
            <Header
              changeLang={this.changeLang}
              logout={this.logout}
              getUser={this.getUser}
            />
            <NavBar
              getUser={this.getUser}
              setSys={this.setSys}
              setSystems={this.setSystems}
              logout={this.logout}
            />
            {this.getContent()}
            <Toolbar />
            <Footer />
          </LangContext.Provider>
        </React.Fragment>
      );
  }
}

export default App;
