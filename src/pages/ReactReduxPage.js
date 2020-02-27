import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReactReduxPage extends Component {


  render() {
    const { num, add, minus } = this.props
    return (
      <div>
        <p>{num}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    num: state
  }
}
const mapDispatchToProps = {
  add: () => {
    return {
      type: 'ADD'
    }
  },
  minus: () => {
    return {
      type: 'MINUS'
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage) //connect接收两个参数，第二个参数接收一个组件，返回一个组件
