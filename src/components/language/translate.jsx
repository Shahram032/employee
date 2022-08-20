import { Component, useContext } from "react";
import LangContext from "../language/lang";

function GetTranslate(txt) {
  let context = LangContext;
  let lang = context._currentValue;
  var data = tryRequire("./languages/" + lang + ".json");
  if (data) {
    if (data[txt]) return data[txt];
    else return txt;
  } else return txt;
}

function tryRequire(path) {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
}

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
    const lang = this.context.lang;
    let txt = this.props.children;
    var data = this.tryRequire("./languages/" + lang + ".json");
    if (data) {
      if (data[txt]) return <label className="tr">{data[txt]}</label>;
      else return <label className="tr">{txt}</label>;
    } else return txt;
  }

  getTranslate = () => {
    const lang = this.context;
    let txt = this.props.children;
    var data = this.tryRequire("./languages/" + lang + ".json");
    if (data) {
      if (data[txt]) return data[txt];
      else return { txt };
    } else return txt;
  };
}

export default Translate;
export { Translate, GetTranslate };
