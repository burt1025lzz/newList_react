import React, {Component} from 'react'
import {Layout} from 'antd';
import AppHeader from "./components/Header";

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
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    )
  }
}

export default App
