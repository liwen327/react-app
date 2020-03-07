import React, { Component } from 'react';
import { ThemeContext } from '../ThemeContext'

class ContextTypePage extends Component {
  // static contextType = ThemeContext; //第一种写法，contextType是直接挂到ContextTypePage上的
  render() {
    console.log('this:', this);
    //this.context在任何生命周期中都可以访问到
    const { themeColor } = this.context

    return (
      < div className="border">
        <h3 className={themeColor}>ContextTypePage</h3>
      </div >
    );
  }
}

//只能创建一个context上下文，如果定义多个，后面的会覆盖前面的。
ContextTypePage.contextType = ThemeContext; //第二种写法，跟第一种一样都是挂到ContextTypePage上的

export default ContextTypePage;