import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'


export default class Layout extends Component {
  componentDidMount = () => {
    const { title = '商城' } = this.props
    document.title = title
  }


  render() {
    console.log('this.props:==', this.props);

    const { children, showTopBar, showBottomBar } = this.props
    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>btnClick</button>
        {showBottomBar && <BottomBar />}

      </div>
    )
  }
}
