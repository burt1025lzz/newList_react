import React, {Component, Fragment} from 'react'
import TodoItem from "./TodoItem";
import AddNum from "./AddNum";
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this)

    this.state = {
      inputValue: '',
      list: [],
      num: 1
    }
  }

  handleChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    // setState是异步的
    // 可以通过函数回调继续逻辑编写
    this.setState(() => {
      return {
        inputValue: e.target.value
      }
    }, () => {
      console.log(123)
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

  handleAdd() {
    console.log(this.button)
    console.log(this.addNum)
    let num = this.state.num
    num += 2
    this.setState({num})
  }

  render() {
    // 当组件初次创建的时候, render函数会被执行一次
    // 当 states数据发生変更的时候, render函数会被重新执行
    // 当 props数据发生变更的时候, render函数会被重新执行
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
        {/* ref写在htm标签上,获取的是dom节点*/}
        <button
          onClick={this.handleAdd}
          ref={(button) => {
            this.button = button
          }}
        >
          点击,数字加2
        </button>
        {/* ref写在组件标签上,获取的是组件的js实例*/}
        <AddNum num={this.state.num} ref={(addNum) => {
          this.addNum = addNum
        }}/>
      </Fragment>
    )
  }
}

export default App
