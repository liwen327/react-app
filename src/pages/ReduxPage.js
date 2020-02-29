import React, { Component } from 'react'
import store from '../store/index'

export default class ReduxPage extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add = () => {
    store.dispatch({ type: 'ADD' })
  }
  minus = () => {
    store.dispatch({ type: 'MINUS' })
  }

  //异步
  asyncAdd = () => {
    //中间件：redux-logger   redux-thunk  相当于dispatch被封装了，可以接收回调以及定时器，可以在这里进行ajax请求
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'ADD' })
      }, 1000)

    })
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>

      </div>
    )
  }
}
