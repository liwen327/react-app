import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class lifeCirclePage extends Component {
  static defaultProps = {
    msg: 'default msg'
  };
  static propTypes = {
    // msg: propTypes.string.isrequired
  };
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    // console.log('constructor');

  }
  /* componentWillMount() {
    console.log('componentWillMount');

  } */
  /* static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    const { count } = prevState
    return count > 5 ? { count: 0 } : null

  } */
  componentDidMount() {
    // console.log('componentDidMount');

  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h3>lifeCirclePage</h3>
        <button >{count}</button>
      </div>
    )
  }
}