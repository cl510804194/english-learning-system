import React, { Component } from "react";
import { Card } from "antd";
import axios from "axios";
import "./style.css";
export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    let url = "http://www.dell-lee.com/react/api/detail.json";
    if (id) {
      url = url + "?id=" + id;
    }
    axios.get(url).then(res => {
      this.setState({
        title: res.data.data.title,
        content: res.data.data.content
      });
    });
  }
  render() {
    return (
      <Card title={this.state.title}>
        <div
          className="detail"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
      </Card>
    );
  }
}
