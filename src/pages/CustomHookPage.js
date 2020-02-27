import React, { useState, useEffect } from 'react'

export default function CustomHookPage(props) {
  //定义一个叫count的state变量，初始值为0
  const [count, setCount] = useState(0)

  //useEffect与componentDidMount和componentDidUpdate类似
  useEffect(() => {
    console.log('count effect');
    document.title = `被点击了${count}次`

  }, [count])//只需要count发生改变时执行

  /* //错误调用自定义Hook,因为在条件判断中调用了自定义Hook  useClock
  if (count) {
    useClock()  //React Hook "useClock" is called conditionally. React Hooks must be called in the exact same order in every component render
  } */



  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div >
  )

}

//报错：原因是在普通js函数中调用 了自定义的Hook 和useState

/* function getNum() {
  const [num, setNum] = useState(0)
  useHook()  //报错：React Hook "useHook" is called in function "getNum" which is neither a React function component or a custom React Hook function
} */

//自定义Hook必须以use开头，
/**
 * 使用规则：
 * 1、只能在函数最外层调用Hook,不能在循环、条件判断或子函数中调用。
 * 2、只能在React的函数组件和自定义的Hook中调用，不能在其它js函数中调用
 */
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    //只在componentDidMount执行
    console.log('data effect');
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    //类似于componentWillUnMount
    return () => clearInterval(timer)

  }, [])

  return date

}