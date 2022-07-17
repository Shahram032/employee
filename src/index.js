import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import Menu from "./components/menu/menu";
import NavBar from "./components/navbar/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <NavBar />
    <Menu />
  </React.Fragment>
);

reportWebVitals();
