import React, {Component} from "react"
import {List} from 'antd';
import axios from "axios";


class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  handleGetData(id) {
    let url = 'http://www.dell-lee.com/react/api/list.json'
    if (id) url += '?id=' + id
    axios.get(url).then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }

  render() {
    return (
      <List
        bordered
        style={{background: '#fff'}}
        dataSource={this.state.data}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />
    )
  }

  componentWillReceiveProps(nextProps) {
    this.handleGetData(nextProps.match.params.id)
  }

  componentDidMount() {
    this.handleGetData(this.props.match.params.id)
  }
}

export default NewList
