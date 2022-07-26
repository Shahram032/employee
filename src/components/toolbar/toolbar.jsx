import React, { Component } from "react";
import "./toolbar.css";
import CustomIcon from "../menu/icons/customIcon";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <div className="px-3 py-2 bg-muted mb-1 rounded shadow">
        <div className="container btn-toolbar justify-content-between">
          <div className="d-flex flex-wrap justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto my-2 my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-secondary">
                  {CustomIcon("FaChevronCircleRight", 25, "#60b359")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-secondary">
                  {CustomIcon("FaRetweet", 25, "Orange")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-secondary">
                  {CustomIcon("FaChevronCircleLeft", 25, "#ea4d6a")}
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-wrap justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto my-2 my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-white">
                  {CustomIcon("FaEye", 25, "#511d5f")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  {CustomIcon("FaSearch", 25, "#511d5f")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  {CustomIcon("FaEdit", 25, "#511d5f")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  {CustomIcon("FaTrash", 25, "#511d5f")}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  {CustomIcon("FaPlusCircle", 25, "#511d5f")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
