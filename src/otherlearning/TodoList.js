import React, { Component, Fragment } from "react";
import Todoitem from "./Todoitem";
import "./style.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInpuchange = this.handleInpuchange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  handleInpuchange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleKeyUp(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      const list = [...this.state.list, this.state.inputValue];
      this.setState({
        list,
        inputValue: ""
      });
    }
    console.log(e.keyCode);
  }
  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list
    });
  }
  getListItems() {
    //父子组件的概念
    //父组件通过属性的形式向子组件传值
    return this.state.list.map((value, index) => {
      return (
        <Todoitem
          key={index}
          content={value}
          index={index}
          deleteFunction={this.handleItemClick}
        />
      );
    });
  }
  render() {
    return (
      <Fragment>
        {/* 这是一个label */}
        <label htmlFor="myInput">请输入内容</label>
        <input
          id="myInput"
          className="input"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInpuchange}
          onKeyUp={this.handleKeyUp}
        />
        <ul>{this.getListItems()}</ul>
      </Fragment>
    );
  }
}
export default TodoList;
