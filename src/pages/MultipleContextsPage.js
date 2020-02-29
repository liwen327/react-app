import React from 'react'
import { ThemeConsumer } from '../ThemeContext'
import { UserConsumer } from '../UserContext'

export default function MultipleContextsPage(props) {
  return (
    <div>
      <h3>MultipleContextsPage</h3>
      <ThemeConsumer>
        {theme => (
          <UserConsumer>
            {user => <div className={theme.themeColor}>{user.name}</div>}
          </UserConsumer>
        )}
      </ThemeConsumer>

    </div>
  )
}
