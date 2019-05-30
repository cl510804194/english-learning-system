import React, { Component } from "react";
import logo from "./logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import axios from "axios";
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          type: "mail",
          title: "VOA慢速英语"
        },
        {
          id: 2,
          type: "login",
          title: "VOA常速英语"
        },
        {
          id: 3,
          type: "border-top",
          title: "VOA英语教学"
        },
        {
          id: 4,
          type: "mail",
          title: "VOA慢速英语"
        },
        {
          id: 5,
          type: "mail",
          title: "VOA慢速英语"
        },
        {
          id: 6,
          type: "mail",
          title: "VOA慢速英语"
        }
      ]
    };
  }
  getMenuItems() {
    // eslint-disable-next-line no-unused-expressions

    return this.state.list.map(item => {
      console.log(1);
      return (
        <Menu.Item key={item.id}>
          <Link to={`/${item.id}`}>
            <Icon type={item.type} />
            {item.title}
          </Link>
        </Menu.Item>
      );
    });
  }
  componentDidMount() {
    axios.get("http://www.dell-lee.com/react/api/header.json").then(res => {
      this.setState({
        list: res.data.data
      });
      console.log(res.data.data);
    });
  }
  render() {
    return (
      <div>
        <Link to="/">
          <img src={logo} alt="" className="app-header-logo" />
        </Link>
        <Menu mode="horizontal" className="app-header-menu">
          {this.getMenuItems()}
        </Menu>
      </div>
    );
  }
}
export default AppHeader;
