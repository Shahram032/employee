import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Header from "./App";

document.getElementById("root").classList.add("container");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

reportWebVitals();
