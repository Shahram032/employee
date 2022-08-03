import React, { Component } from "react";

class LoadingSpinner extends Component {
  state = {};
  render() {
    return (
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
    );
  }
}

export default LoadingSpinner;
