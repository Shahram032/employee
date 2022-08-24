import React, { Component } from "react";
import LangContext from "../language/lang";
import "./table.css";
import axios from "axios";
import { toast } from "react-toastify";
import Translate, { GetTranslate } from "../language/translate";

class Table extends Component {
  static contextType = LangContext;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: "",
      keys: [],
      data: [{}],
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

  getContent = async () => {
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
        let keys = Object.keys(object.content[0]);
        //console.log(object.content);
        //console.log(keys);
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
          sysMenus: [],
        });
        toast.error(error.message);
      });
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
            <tr>
              {this.state.keys.map((k) => (
                <th>
                  <Translate>{k}</Translate>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((k) => (
              <tr>
                {this.state.keys.map((d) => (
                  <th>{k[d]}</th>
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
