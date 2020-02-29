import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import ConsumerPage from './ConsumerPage'
import { ThemeProvider } from '../ThemeContext'
import { UserProvider } from '../UserContext'
import MultipleContextsPage from './MultipleContextsPage'

class ContextPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'Mike'
      }
    }
  }
  changeTheme = () => {
    const { themeColor } = this.state.theme
    this.setState({
      theme: { themeColor: themeColor === 'red' ? 'green' : 'red' }
      // theme: { this.state.theme.themeColor: this.state.theme.themeColor === 'red' ? 'green' : 'red' }
    })
  }

  render() {
    const { theme, user } = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeTheme}>更改配色</button>
        <ThemeProvider value={theme}>
          {/* //类组件时的用法 */}
          <ContextTypePage></ContextTypePage>

          {/* //函数组件时的用法 */}
          <ConsumerPage></ConsumerPage>
          <UserProvider value={user}>
            <MultipleContextsPage></MultipleContextsPage>
          </UserProvider>
        </ThemeProvider>

      </div>
    )
  }
}

export default ContextPage
