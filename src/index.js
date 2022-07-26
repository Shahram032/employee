import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import Menu from "./components/menu/menu";
import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Table from "./components/table/table";
import Footer from "./components/footer/footer";
import Top from "./components/stickytop/top";
import Toolbar from "./components/toolbar/toolbar";

document.getElementById("root").classList.add("container");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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

reportWebVitals();
