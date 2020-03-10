import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


export default connect(
  //mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin }),

  //mapDispatchToProps
  {
    login: () => ({ type: 'LOGIN_SUCCESS' })
  }
)(class LoginPage extends Component {

  render() {
    console.log('loginProps:', this.props);
    const { isLogin, location, login } = this.props;
    const { redirect = '/' } = location.state || {};
    if (isLogin) {
      //已经登录
      return <Redirect to={redirect} />
    } else {
      //未登录，在此登录页面
      return (
        <div>
          <h3>LoginPage</h3>
          <button onClick={login}>登录</button>
        </div>
      )
    }
  }
})

