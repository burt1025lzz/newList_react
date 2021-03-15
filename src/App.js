import React, {Component} from 'react'
import {Layout} from 'antd';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHeader from "./components/Header";
import NewList from "./containers/list";
import NewDetail from "./containers/detail";

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
            <Switch>
              <Route path="/detail" component={NewDetail}/>
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
