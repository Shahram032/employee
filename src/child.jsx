import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick = () => {
    // Simply call the setStateOfParent function from
    // prop and pass required argument
    this.props.setStateOfParent("Geeks For Geeks");
  };

  render() {
    return <button onClick={this.handleClick}>Reveal Title</button>;
  }
}

export default Child;
