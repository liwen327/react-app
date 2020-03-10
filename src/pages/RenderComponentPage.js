import React, { Component, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export class RenderComponentPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>RenderComponentPage</h3>
        <button onClick={() => this.setState({ count: count + 1 })}>change count{count}</button>

        <Router>
          {/* 渲染component的时候会调用 React.createElement，如果使用下面这种匿名函数的形式，每次都会生成一个新的匿名函数，导致生成的
        组件的type总是不相同，这个时候会产生重复的卸载和挂载 */}
          {/* 错误例子：观察下child中的didMount和willUnMount函数 */}
          {/* <Route component={() => <Child count={count}></Child>} /> */}
          {/* 点击change count按钮时会一直打印willUnmount  ,也一直会让组件卸载和挂载 */}
          {/* <Route component={() => <FunctionChild count={count}></FunctionChild>} /> */}

          {/* 下面是正确的例子 component改成render就可以了，这里可以去看源码*/}

          {/* <Route render={() => <Child count={count}></Child>} /> */}
          {/* <Route render={() => <FunctionChild count={count}></FunctionChild>} /> */}

          {/* children的渲染方式如何呢？运行下面的例子观察下 */}
          <Route children={() => <Child count={count}></Child>} />
          <Route children={() => <FunctionChild count={count}></FunctionChild>} />
        </Router>

      </div>
    )
  }
}


class Child extends Component {
  componentDidMount() {
    console.log('componentDidMount');

  }
  componentWillUnmount() {
    console.log('componentWillUnmount');

  }
  render() {
    return (<div>Child {this.props.count}</div>);
  }
}

function FunctionChild(props) {
  useEffect(() => {
    return () => {
      console.log('willUnmount');

    }
  }, [])
  return <div>child---{props.count}</div>
}



export default RenderComponentPage
