import React, { Component, PureComponent } from 'react'

export default class PureComponentPage extends PureComponent {

  constructor(props, context) {
    super(props, context)
    this.state = {
      count: 0
    }
  }
  setCount = () => {
    this.setState({
      count: 100
    })
  }
  /* shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count
  } */

  render() {
    const { count } = this.state
    console.log('render');

    return (
      <div>
        <p>{count}</p>
        <button onClick={this.setCount}>count</button>

      </div>
    )
  }
}
