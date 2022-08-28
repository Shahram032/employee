import React, { Component } from "react";
import LangContext from "../language/lang";
import "./table.css";
import axios from "axios";
import { toast } from "react-toastify";
import Translate, { GetTranslate } from "../language/translate";
import CustomIcon from "../menu/icons/customIcon";

class Table extends Component {
  static contextType = LangContext;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: "",
      keys: [],
      data: [{}],
      srt: {},
      filter: "id",
      selectedRecord: {},
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.getContent();
  }

  resetFilter = () => {
    this.setState({ filter: "id" });
  };

  getContentUrl = (content) => {
    let res = "";
    for (var i = 0; i < content.length; i++) {
      if (content[i] == content[i].toUpperCase())
        res = res + "_" + content[i].toLowerCase();
      else res = res + content[i];
    }
    res = res.substring(1, res.length);
    return res;
  };

  selectRow = (record) => {
    this.setState({ selectedRecord: record });
    const collection = document.getElementsByClassName("selectedRow");
    for (let i = 0; i < collection.length; i++) {
      collection[i].classList.remove("selectedRow");
    }
    document.getElementById("rw_" + record.id).classList.add("selectedRow");
  };

  selectCol = (event) => {
    event.stopPropagation();
    let col = event.currentTarget.id.replace("col_", "");
    if (event.ctrlKey) {
      this.setState({ filter: col });
      return;
    }
    let tmp = this.state.srt;
    if (!tmp[col]) {
      tmp[col] = { order: "asc" };
    } else {
      if (tmp[col].order === "asc") tmp[col] = { order: "desc" };
      else delete tmp[col];
    }

    this.setState({ srt: tmp });
  };

  deSelectRow = () => {
    this.state.selectedRecord = {};
    const collection = document.getElementsByClassName("selectedRow");
    for (let i = 0; i < collection.length; i++) {
      collection[i].classList.remove("selectedRow");
    }
  };

  getContent = async () => {
    this.deSelectRow();
    this.state.srt = {};
    this.state.filter = "id";
    const baseUrl = this.context.baseUrl;
    axios
      .get(
        baseUrl + "base/" + this.getContentUrl(this.context.content) + "/all",
        {
          headers: this.context.headers,
        }
      )
      .then((response) => {
        let object = response.data.data[Object.keys(response.data.data)[0]];
        let keys = [];
        if (object.content.length > 0) keys = Object.keys(object.content[0]);
        this.setState({
          loading: false,
          keys: keys,
          data: object.content,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          data: [],
        });
        toast.error(error.message);
      });
  };

  getSrtFlt = (col) => {
    let filterColor = "white";
    if (this.state.filter === col) {
      filterColor = "#511d5f";
    }
    let tmp = this.state.srt[col];
    if (tmp) {
      if (tmp.order === "asc")
        return (
          <div className="d-flex">
            {CustomIcon("FaFilter", 12, filterColor)}
            {CustomIcon("FaArrowUp", 12, "#60b359")}
          </div>
        );
      else
        return (
          <div className="d-flex">
            {CustomIcon("FaFilter", 12, filterColor)}
            {CustomIcon("FaArrowDown", 12, "#ea4d6a")}
          </div>
        );
    }
    return (
      <div className="d-flex">
        {CustomIcon("FaFilter", 12, filterColor)}
        {CustomIcon("FaArrowUp", 12, "white")}
      </div>
    );
  };

  render() {
    if (this.state.content != this.context.content) {
      this.getContent();
      this.state.content = this.context.content;
    }
    return (
      <div className="col col-9 rounded p-3 table-responsive shadow">
        <div className="d-flex justify-content-between" role="search">
          <div className="text-end text-dark fw-bold">
            <Translate>{this.context.content}</Translate>
          </div>
          <form className="d-flex" role="search">
            <button
              className="btn btn-sm btn-outline-success mb-2"
              type="button"
            >
              <Translate>Search</Translate>
            </button>
            <input
              className="form-control form-control-sm me-2 ms-2 mb-2"
              type="search"
              placeholder={GetTranslate(this.state.filter)}
              aria-label="Search"
            />
            <button
              className="btn btn-sm btn-outline-danger mb-2"
              type="button"
              onClick={this.resetFilter}
            >
              {CustomIcon("FaTimes", 12, "")}
            </button>
          </form>
        </div>
        <table className="table table-sm caption-top">
          <thead>
            <tr className="border-bt border-dark">
              <th className="prevent-select">
                <Translate>Serial</Translate>
              </th>
              {this.state.keys.map((k) => (
                <th
                  key={k}
                  id={"col_" + k}
                  onClick={this.selectCol}
                  className="prevent-select"
                >
                  <div className="d-flex">
                    <div>
                      <Translate>{k}</Translate>
                    </div>
                    <div> {this.getSrtFlt(k)} </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((k, index) => (
              <tr
                className={"tableRow"}
                onClick={() => this.selectRow(k)}
                key={"rw_" + k.id}
                id={"rw_" + k.id}
              >
                <td>{++index}</td>
                {this.state.keys.map((d) => (
                  <td key={"td_" + d + "_" + k.id}>{k[d]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
