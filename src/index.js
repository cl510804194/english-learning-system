import React, { Component } from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./style.css";
import AppHeader from "./components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./containers/List/index";
import Detail from "./containers/Detail/index";
import LoginIn from "./components/LoginIn/index";
import Vip from "./containers/Vip/index";
const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout style={{ minWidth: 1100, height: "100%" }}>
            <Header className="header">
              <AppHeader />
            </Header>
            <Content className="content">
              <LoginIn />
              <Switch>
                <Route path="/vip" component={Vip} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/:id?" component={List} />
              </Switch>
            </Content>
            <Footer className="footer">@copyRight-Cheng 2019</Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
