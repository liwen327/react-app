import React from 'react'
import { ThemeConsumer } from '../ThemeContext'

export default function ConsumerPage(props) {
  console.log('props:', props);
  return (
    <div className="border ">
      <h3>ConsumerPage</h3>
      <ThemeConsumer>
        {ctx => <div className={ctx.themeColor}>文本</div>}
      </ThemeConsumer>

    </div>
  )
}
