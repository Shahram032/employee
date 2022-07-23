import React from "react";
import "./icons.svg";

const SvgIcon = (props) => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#${props.name}`} />
  </svg>
);

export default SvgIcon;
