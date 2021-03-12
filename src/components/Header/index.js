import React, {Component, Fragment} from "react"
import axios from "axios";
import logo from './logo.png'
import {Menu} from 'antd';
import './style.css'
import {
  UsergroupAddOutlined,
  IdcardOutlined,
  DingdingOutlined,
  GooglePlusOutlined,
  WechatOutlined,
  DribbbleOutlined,
  MailOutlined
} from '@ant-design/icons';


class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      icon: [<UsergroupAddOutlined/>, <IdcardOutlined/>, <DingdingOutlined/>, <GooglePlusOutlined/>, <WechatOutlined/>,
        <DribbbleOutlined/>, <MailOutlined/>]
    }
  }

  getItemList() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id} icon={this.state.icon[item.id - 1]}>
          {item.title}
        </Menu.Item>
      )
    })
  }

  componentDidMount() {
    axios.get("http://localhost:3001/data").then(res => {
      this.setState({
        list: res.data.data
      })
    })
  }

  render() {
    return (
      <Fragment>
        <img className="app-header-logo" src={logo} alt="logo"/>
        <Menu mode="horizontal" className="app-header-menu">
          {this.getItemList()}
        </Menu>
      </Fragment>
    )
  }
}

export default AppHeader