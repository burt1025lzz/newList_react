import React, {Component, Fragment} from 'react'
import TodoItem from "./TodoItem";
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && this.state.inputValue) {
      const list = [...this.state.list, this.state.inputValue]
      this.setState({
        list,
        inputValue: ''
      })
    }
  }

  handleItemClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  getItemList() {
    return this.state.list.map((value, index) => {
      return (
        // 父组件通过属性的形式向子组件传值
        <TodoItem
          content={value}
          index={index}
          key={index}
          deleteFun={this.handleItemClick}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
        {/*这是JSX中的注释*/}
        <label htmlFor='input'>请输入内容:</label>
        <input
          id='input'
          className='input'
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <ul>
          {this.getItemList()}
        </ul>
      </Fragment>
    )
  }
}

export default App
