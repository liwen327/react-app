import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { RouterContext } from './RouterContext';


export class BrowserRouter extends Component {
  constructor(props, context) {
    super(props, context)
    this.history = createBrowserHistory()
    this.state = {}
  }



  render() {
    return (
      <RouterContext.Provider value={{ history: this.history }}>
        {this.props.children}
      </RouterContext.Provider >
    )


  }
}
