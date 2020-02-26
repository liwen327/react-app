import React, { Component } from 'react'
import store from '../store/'

export default class ReduxPage extends Component {
  componentDidMount = () => {
    store.subscribe(() => {
      console.log('store 发生变化了！');
      this.forceUpdate()   //强制渲染

    })
  }
  add = () => {
    store.dispatch({ type: 'ADD' })
  }
  minus = () => {
    store.dispatch({ type: 'MINUS' })
  }


  render() {
    console.log('store:==', store);
    console.log('store.getState:==', store.getState);

    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>

      </div>
    )
  }
}
