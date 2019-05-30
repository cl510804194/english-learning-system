import React, { Component } from "react";
class Todoitem extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(e) {
    //改变父组件中的list数据
    const { deleteFunction, index } = this.props;
    deleteFunction(index);
    this.props.deleteFunction(this.props.index);
  }
  render() {
    //子组件通过this.props的属性，从父组件接受传递过来的值

    return <li onClick={this.handleItemClick}>{this.props.content}</li>;
  }
}
export default Todoitem;
