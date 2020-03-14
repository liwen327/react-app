import React, { Component } from 'react'

export class Route extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // console.log('component:', this.props.component);
    console.log('pathname:', window.location.pathname);
    const { path, component } = this.props;
    const match = window.location.pathname === path;

    return match ? React.createElement(component, this.props) : null;
  }
}

