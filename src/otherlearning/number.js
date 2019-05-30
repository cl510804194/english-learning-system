import React, { Component } from "react";
class Number extends Component {
  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps----------");
  }
  shouldComponentUpdate() {
    console.log("child");
  }
  componentWillUpdate() {
    console.log("child componentWillMount");
  }
  componentDidUpdate() {
    console.log("child componentDidMount");
  }
  render() {
    return <div>{this.props.number}</div>;
  }
}
export default Number;
