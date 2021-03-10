import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {deleteFun, index} = this.props
    deleteFun(index)
  }

  render() {
    const {content} = this.props
    return (
      // 子组件通过 this.props 的属性,从父组件接受传递过来的值
      <li onClick={this.handleClick}>{content}</li>
    )
  }
}

export default TodoItem
