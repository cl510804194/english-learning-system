import React, { Component } from "react";
import { List } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];
class ListAn extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={Item => <List.Item>{Item}</List.Item>}
      />
    );
  }
}
export default ListAn;
