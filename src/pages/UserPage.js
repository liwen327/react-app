import React, { Component } from 'react'
import Layout from './Layout'

export class UserPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="用户页面">
        {
          {
            content: (
              <div><h3>UserPage</h3></div>
            )
          }
        }
      </Layout>

    )
  }


}


export default UserPage
