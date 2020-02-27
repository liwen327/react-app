import React, { useState, PureComponent, useCallback } from 'react'

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0)
  const addClick = useCallback(() => {

    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i

    }
    return sum;
  }, [count])
  const [value, setValue] = useState('')

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child addClick={addClick}></Child>

    </div>
  )
}



class Child extends PureComponent {
  render() {
    console.log('child render');

    const { addClick } = this.props
    return (
      <div>
        <button onClick={() => console.log(addClick())}>add</button>


      </div>
    )
  }
}


