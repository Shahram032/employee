import { Component } from "react";
import LangContext from "../language/lang";

class Translate extends Component {
  static contextType = LangContext;

  tryRequire = (path) => {
    try {
      return require(`${path}`);
    } catch (err) {
      return null;
    }
  };

  render() {
    const lang = this.context;
    let txt = this.props.children;
    var data = this.tryRequire("./languages/" + lang + ".json");
    if (data) {
      if (data[txt]) return <label className="tr">{data[txt]}</label>;
      else return <label className="tr">{txt}</label>;
    } else return txt;
  }
}

export default Translate;
