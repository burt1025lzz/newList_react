import React, {Component} from 'react'
import {Layout} from 'antd';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHeader from "./components/Header";
import NewList from "./containers/list";
import NewDetail from "./containers/detail/detail";

const {Header, Footer, Content} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Layout style={{minWidth: 1350}}>
        <Header className="header">
          <AppHeader/>
        </Header>
        <Content className="content">
          <BrowserRouter>
            <Switch>
              <Route path="/detail" component={NewDetail}/>
              <Route path="/" component={NewList}/>
            </Switch>
          </BrowserRouter>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    )
  }
}

export default App
