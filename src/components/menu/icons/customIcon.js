import React from "react";
import * as FontAwesome from "react-icons/fa";

const CustomIcon = (icon, size, color) => {
  const beer = React.createElement(FontAwesome[icon]);
  return (
    <div>
      <div style={{ fontSize: size, color: color }}>{beer}</div>
    </div>
  );
};

export default CustomIcon;
