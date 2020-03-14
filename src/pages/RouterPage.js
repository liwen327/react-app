import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from '../k-react-router-dom/BrowserRouter'
import { Route } from '../k-react-router-dom/Route'
import { Link } from '../k-react-router-dom/Link'
import HomePage from './HomePage'
import UserPage from './UserPage'
/* import LoginPage from './LoginPage'
import searchPage from './searchPage'
import PrivateRoute from './PrivateRoute' */


export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          {/* <Link to="/login">登录</Link>
          <Link to="/search/123">搜索</Link> */}
          {/* route一定要包裹在Router内，因为Route要使用location history, 这些来自router */}
          {/* path值不写，则会一匹配，常用来做404页面 */}
          {/* <Switch> */}
          <Route exact path="/" component={HomePage}></Route>
          {/* 用户中心需要登录才能看到 */}
          <Route path="/user" component={UserPage}></Route>
          {/* <PrivateRoute path="/user" component={UserPage}></PrivateRoute> */}
          {/* <Route path="/login" component={LoginPage}></Route>
          <Route path="/search/:id" component={searchPage}></Route> */}
          <Route component={() => <div>404 page</div>}></Route>
          {/* </Switch> */}
        </Router>

      </div>
    )
  }
}
