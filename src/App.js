import React from "react";
import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  if (!token) {
    return (
      <div className="App">
        Hello AppDividend
        <Login />
      </div>
    );
  }

  return (
    <React.Fragment>
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
