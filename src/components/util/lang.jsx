import Dropdown from "react-bootstrap/Dropdown";
import "./lang.css";

function Lang() {
  return (
    <select
      className="form-select lang"
      aria-label="Default select example"
      dir="ltr"
      defaultValue={1}
    >
      <option value={1}>فارسی</option>
      <option value={2}>English</option>
    </select>
  );
}

export default Lang;
