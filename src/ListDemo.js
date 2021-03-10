import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "antd";

class ListDemo extends Component {
  render() {
    console.log(this)
    return (
      <Link to='/'>
        <Button>你好</Button>
      </Link>
    )
  }
}

export default ListDemo
