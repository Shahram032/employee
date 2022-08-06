import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.setStateOfParent.bind(this);
    this.state = { title: "Update me" };
  }

  // Creating below function to set state
  // of this (parent) component.
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
