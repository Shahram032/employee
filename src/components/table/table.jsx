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
      selectedRecord: {},
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.getContent();
  }

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

  selectCol = (col) => {
    //if (document.getElementById("col_" + col).classList.contains("selectedCol"))
    //  document.getElementById("col_" + col).classList.remove("selectedCol");
    //else document.getElementById("col_" + col).classList.add("selectedCol");
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

  getSrt = (col) => {
    let tmp = this.state.srt[col];
    if (tmp) {
      if (tmp.order === "asc") return CustomIcon("FaArrowUp", 12, "Green");
      else return CustomIcon("FaArrowDown", 12, "Red");
    }
    return <></>;
  };

  render() {
    if (this.state.content != this.context.content) {
      this.getContent();
      this.state.content = this.context.content;
    }
    return (
      <div className="col col-9 rounded p-3 table-responsive shadow">
        <table className="table table-sm caption-top">
          <caption className="text-center text-dark fw-bold">
            <Translate>{this.context.content}</Translate>
          </caption>
          <thead>
            <tr className="border-bt border-dark">
              <th>
                <Translate>Serial</Translate>
              </th>
              {this.state.keys.map((k) => (
                <th key={k} id={"col_" + k} onClick={() => this.selectCol(k)}>
                  <div className="d-flex">
                    <span className="me-1">
                      <Translate>{k}</Translate>
                    </span>
                    <span> {this.getSrt(k)} </span>
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
