import React, { Component } from 'react'


const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props}></Cmp>
    </div>
  )
}

//高阶组件传入一个组件，返回一个组件
const foo2 = Cmp => props => {
  return (
    <div className='greenBorder'>
      <Cmp {...props} />
    </div>
  )
}
/* function child(props) {
  return <div>child {props.name}</div>
} */

//装饰器只能用在class上，执行顺序从下向上
@foo2
@foo2
@foo
//装饰器
class Child extends Component {

  render() {
    return (
      <div>child </div>
    );
  }
}



// const Foo = foo2(foo(child))
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>Hoc page</h3>
        {/* <Foo name="msg" /> */}
        <Child />

      </div>
    )
  }
}
