import React, {Component} from 'react'
import {Layout} from 'antd';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHeader from "./components/Header";
import Login from "./components/Login";
import NewList from "./containers/list";
import NewDetail from "./containers/detail";
import Vip from "./containers/Vip";

const {Header, Footer, Content} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>

        <Layout style={{minWidth: 1350, height: '100%'}}>
          <Header className="header">
            <AppHeader/>
          </Header>
          <Content className="content">
            <Login/>
            <Switch>
              <Route path="/vip" component={Vip}/>
              <Route path="/detail/:id" component={NewDetail}/>
              <Route path="/:id?" component={NewList}/>
            </Switch>
          </Content>
          <Footer className="footer">@copy right burt 2020</Footer>
        </Layout>
      </BrowserRouter>

    )
  }
}

export default App
