import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class ButtonAn extends Component {
  render() {
    return (
      <Link to="list/a=123">
        <Button type="primary">Primary</Button>
      </Link>
    );
  }
}
export default ButtonAn;
