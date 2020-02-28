import React, { Component } from 'react';

export default class setState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  changeValue = v => {
    this.setState(
      {
        counter: this.state.counter + v
      },
      () => {
        console.log('counter同步====', this.state.counter);
      }
    )
    //console.log('counter不同步====', this.state.counter);//不同步，如果不用setTimout 和setState回调的话

  }

  setCounter = () => {
    //setState在setTimout和原生事件中是同步的
    /* this.changeValue(1);
    this.changeValue(2); */
    setTimeout(() => {
      this.changeValue(1);
      this.changeValue(2);  //两个changeValue都运行所以一共是加3 ，先加1，再加2

    }, 1000)
    // console.log('this.state.counter====', this.state.counter);
  }
  /* componentDidMount() {
    document.getElementById("test").addEventListener('click', this.setCounter)
  } */
  render() {
    const { counter } = this.state
    return (
      <div>
        <h3>setStatePage</h3>
        <button onClick={this.setCounter}>{counter}</button>
        <button id="test">原生事件：{counter}</button>
      </div>
    )
  }
}