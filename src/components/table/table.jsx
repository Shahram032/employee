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
        this.setState({
          loading: false,
          sysMenus: response.data.data.sysMenus,
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
            {this.getContentUrl(this.context.content)}
          </caption>
          <thead>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">نام</th>
              <th scope="col">نام خانوادگی</th>
              <th scope="col">حساب</th>
              <th scope="col">ردیف</th>
              <th scope="col">نام</th>
              <th scope="col">نام خانوادگی</th>
              <th scope="col">حساب</th>
              <th scope="col">نام</th>
              <th scope="col">نام خانوادگی</th>
              <th scope="col">حساب</th>
              <th scope="col">ردیف</th>
              <th scope="col">نام</th>
              <th scope="col">نام خانوادگی</th>
              <th scope="col">حساب</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
