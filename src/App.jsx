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
import LangContext from "./components/language/lang";

class App extends Component {
  constructor(props) {
    super(props);
    this.setStateOfParent.bind(this);
    this.setUser.bind(this);
    this.getUser.bind(this);
    this.logout.bind(this);
    this.changeLang.bind(this);
    this.state = { title: "Update me", lang: "fa" };
  }

  changeLang = (lang) => {
    console.log(lang);
    this.setState({ lang: lang });
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
          <Login setUser={this.setUser} />
        </div>
      );
    if (this.getUser())
      return (
        <React.Fragment>
          <LangContext.Provider value={this.state.lang}>
            <ToastContainer />
            <Top />
            <Header
              changeLang={this.changeLang}
              logout={this.logout}
              getUser={this.getUser}
            />
            <NavBar getUser={this.getUser} />
            <div className="row m-1">
              <Menu getUser={this.getUser} />
              <Table />
            </div>
            <Toolbar />
            <Footer />
          </LangContext.Provider>
        </React.Fragment>
      );
  }
}

export default App;
