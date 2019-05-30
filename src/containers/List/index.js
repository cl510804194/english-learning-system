import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import axios from "axios";

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires."
// ];
export default class ListAn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }
  componentDidMount() {
    let url = "http://www.dell-lee.com/react/api/list.json";
    axios.get(url).then(res => {
      console.log(res);
      this.setState({
        list: res.data.data
      });
      console.log(res.data.data);
    });
  }
  //props数值发生变化时
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.id);
    console.log("test");
    const id = nextProps.match.params.id;
    axios
      .get("http://www.dell-lee.com/react/api/list.json?id=" + id)
      .then(res => {
        console.log(res);
        this.setState({
          list: res.data.data
        });
        console.log(res.data.data);
      });
  }
  render() {
    return (
      <List
        style={{ background: "white" }}
        bordered
        dataSource={this.state.list}
        renderItem={item => (
          <Link to={`/detail/${item.id}`}>
            <List.Item>{item.title}</List.Item>
          </Link>
        )}
      />
    );
  }
}
