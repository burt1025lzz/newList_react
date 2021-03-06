import React, {Component} from "react"
import {Card} from "antd";
import './style.css'
import axios from "axios";

class NewDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return (
      <Card title={this.state.title}>
        <div className="detail" dangerouslySetInnerHTML={{__html: this.state.content}}/>
      </Card>
    )
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://www.dell-lee.com/react/api/detail.json?id=${id}`).then(res => {
      const data = res.data.data
      this.setState(data)
    })
  }
}

export default NewDetail
