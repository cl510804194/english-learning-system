import React, { Component, Fragment } from "react";
//在react中，生命周期函数指的是组件在某一时刻会自动执行的函数
import Number from "./number";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      counter: 1,
      number: 1
    };
  }
  handleBtnClick() {
    const newCounter = this.state.counter + 1;

    this.setState(
      () => {
        return {
          counter: newCounter
        };
      },
      () => {
        console.log(this.divElem.innerHTML);
      }
    );
  }

  //Mounting:
  //被挂载前生命周期
  componentWillMount() {
    console.log("componentWillMount");
  }
  //当数据发生变化时，render函数会被自动执行,正式进行渲染挂载
  render() {
    //当组件初次被创建或者state数据发生变更的时候，render函数都会被执行一次
    //ref写在html标签上，获取的是dom节点,在组件上，获取的是实例
    console.log("render");
    return (
      <Fragment>
        <button
          ref={button => {
            this.buttonElem = button;
          }}
          onClick={this.handleBtnClick}
        >
          增加
        </button>
        <div
          ref={div => {
            this.divElem = div;
          }}
        >
          {this.state.counter}
        </div>
        <Number number={this.state.number} />
      </Fragment>
    );
  }
  //挂载完毕后
  componentDidMount() {
    console.log("componentDidMount");
  }
  //Updation
  //更新前判断是否继续自动执行
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  //更新前执行
  componentWillUpdate() {
    console.log(" componentWillUpdate");
  }
  //更新后执行
  componentDidUpdate() {
    console.log(" componentWillUpdate");
  }
  //组件从页面中移除前
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
}
export default Counter;
