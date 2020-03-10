import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default connect(
  //mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin }),


)(class PrivateRoute extends Component {

  render() {
    console.log('PrivateProps:', this.props);
    /* const { isLogin, component, location, path } = this.props;
    const pathname = location.pathname;
    console.log('PrivatePath:', pathname); */
    const { isLogin, component, path } = this.props;

    console.log('Path:', path);//这个path为undefined
    if (isLogin) {
      return <Route path={path} component={component}></Route>
      /* <button>退出</button>
      ) */
    } else {
      return <Redirect to={{ pathname: '/login', state: { redirect: path } }} />
    }
  }
})

