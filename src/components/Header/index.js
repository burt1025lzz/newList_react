import React, {Component, Fragment} from "react"
import {Link} from 'react-router-dom'
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
} from '@ant-design/icons';


class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      icon: [<UsergroupAddOutlined/>, <IdcardOutlined/>, <DingdingOutlined/>, <GooglePlusOutlined/>, <WechatOutlined/>,
        <DribbbleOutlined/>]
    }
  }

  getItemList() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id} icon={this.state.icon[item.id - 1]}>
          <Link to={`/${item.id}`}>
            {item.title}
          </Link>
        </Menu.Item>
      )
    })
  }

  componentDidMount() {
    axios.get("http://www.dell-lee.com/react/api/header.json").then(res => {
      this.setState({
        list: res.data.data
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Link to="/">
          <img className="app-header-logo" src={logo} alt="logo"/>
        </Link>
        <Menu mode="horizontal" className="app-header-menu">
          {this.getItemList()}
        </Menu>
      </Fragment>
    )
  }
}

export default AppHeader
