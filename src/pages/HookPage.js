import React, { useState, useEffect } from 'react'

export default function HookPage(props) {
  //定义一个叫count的state变量，初始值为0
  const [count, setCount] = useState(0)
  const [data, setDate] = useState(new Date())

  //useEffect与componentDidMount和componentDidUpdate类似
  useEffect(() => {
    console.log('count effect');
    document.title = `被点击了${count}次`

  }, [count])//只需要count发生改变时执行

  //
  useEffect(() => {
    //只在componentDidMount执行
    console.log('data effect');
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    //类似于componentWillUnMount
    return () => clearInterval(timer)

  }, [])


  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{data.toLocaleTimeString()}</p>
    </div >
  )

}
