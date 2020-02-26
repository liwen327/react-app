import React, { Component } from 'react'

export default class ClassComponentPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    // console.log('new Date:', new Date());

    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }


  render() {
    const { date } = this.state;
    return (
      <div>
        <h3>classComponentPage</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
