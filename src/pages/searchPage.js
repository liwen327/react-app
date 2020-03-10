import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export class searchPage extends Component {


  render() {
    console.log('searchProps:', this.props);

    const { id } = this.props.match.params
    return (
      <div>
        <h3>searchPage</h3>
        <p>search - {id}</p>
        <Link to={"/search/" + id + "/detail"}>详情</Link>
        <Route path={"/search/" + id + "/detail"} component={Detail}></Route>
      </div>
    )
  }
}

function Detail(props) {
  console.log('detailProps:', props);

  return (
    <div>detail</div>
  )
}

export default searchPage
