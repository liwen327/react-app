import React, { useState, useMemo } from 'react'

export default function UseMemoPage() {
  const [count, setCount] = useState(0)
  const expensive = useMemo(() => {
    console.log('expensive compute');

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
      <p>expensive:{expensive}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />

    </div>
  )
}
