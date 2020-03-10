import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

//函数ListItemLink的参数{ to, name, ...rest }中的...rest是把函数除to和name之外的参数都接收了
function ListItemLink({ to, name, ...rest }) {
  return (
    <Route to={to} children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to} {...rest}>
          {name}
        </Link>
      </li>
    )} />
  )
}

export class RouteChildren extends Component {


  render() {
    return (
      <div>
        <h3>RouteChildren</h3>
        <Router>
          <ul>
            {/* 用children的时候就是不管location是否匹配，都需要渲染一些内容 */}
            <ListItemLink to="someWhere" name="链接1" id="1" alt="a1"></ListItemLink>
            <ListItemLink to="someWhere2" name="链接2" id="2" alt="a2"></ListItemLink>
          </ul>
        </Router>

      </div>
    )
  }
}

export default RouteChildren
