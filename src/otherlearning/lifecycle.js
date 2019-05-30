import React, { Component } from "react";
import axios from "axios";
class LifeCycle extends Component {
  handleClick() {
    console.log("window click");
  }
  render() {
    return <div onClick={this.handleClick.bind(this)}>hello world</div>;
  }
  componentDidMount() {
    window.addEventListener("click", this.handleClick);
    axios.get("http:..www.dell-lee.com/react/api/demo.json").then(res => {
      console.log(res);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }
}
export default LifeCycle;
