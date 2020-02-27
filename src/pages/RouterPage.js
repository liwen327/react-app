import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default class RouterPage extends Component {

  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>

          <Link to="/">首页</Link>&nbsp;
          <Link to="/user">用户页面</Link>
          {/* 添加Switch表示只匹配一个路由 */}
          <Switch>
            {/* 根路由要添加exact，以实现精确匹配 */}
            {/* Route有三种渲染方式：children > component > render */}
            <Route exact path="/"
              component={HomePage}
            // children={() => <div>children</div>}
            // render={() => <div>render</div>}
            />


            <Route path="/user" component={UserPage} />
            <Route component={EmptyPage} />
          </Switch>
        </Router>

      </div>
    )
  }
}

class HomePage extends Component {

  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}



class UserPage extends Component {

  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

class EmptyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h4>404页面</h4>
      </div>
    );
  }
}



