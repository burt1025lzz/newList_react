import React, {Component} from "react"
import {Modal, Button, Input, message} from "antd";
import './style.css'
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      modal: false,
      user: '',
      password: ''
    }
    this.showModal = this.showModal.bind(this)
    this.hideModel = this.hideModel.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  showModal() {
    this.setState({
      modal: true
    })
  }

  hideModel() {
    this.setState({
      modal: false
    })
  }

  changeUser(e) {
    this.setState({
      user: e.target.value
    })
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  checkLogin() {
    const {user, password} = this.state
    const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`
    axios.get(url, {
      withCredentials: true
    }).then(res => {
      const login = res.data.data.login
      if (login) {
        message.success('登录成功!').then(() => {
        })
        this.setState({
          login: true,
          modal: false
        })
      } else {
        message.error('登录失败!').then(() => {
        })
      }
    })
  }

  logOut() {
    axios.get('http://www.dell-lee.com/react/api/logOut.json', {
      withCredentials: true
    }).then(res => {
      const logOut = res.data.data.logout
      if (logOut) {
        this.setState({login: false})
        message.success('退出登录成功!').then(() => {
        })
      }
    })
  }

  render() {
    const {login} = this.state
    return (
      <div className="login">
        {
          login ? <Button type="primary" onClick={this.logOut}>退出</Button> :
            <Button type="primary" onClick={this.showModal}>登录</Button>
        }
        <Modal
          title="登录"
          visible={this.state.modal}
          onOk={this.checkLogin}
          onCancel={this.hideModel}
        >
          <Input
            placeholder='请输入用户名'
            style={{marginBottom: 10}}
            value={this.state.user}
            onChange={this.changeUser}
          />
          <Input
            placeholder='请输入密码'
            type='password'
            value={this.state.password}
            onChange={this.changePassword}
          />
        </Modal>
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://www.dell-lee.com/react/api/islogin.json', {
      withCredentials: true
    }).then(res => {
      const login = res.data.data.login
      this.setState({login})
    })
  }
}

export default Login
