import React, {Component} from 'react'

class AddNum extends Component {
  render() {
    const {num} = this.props
    return (
      <p>{num}</p>
    )
  }
}

export default AddNum
