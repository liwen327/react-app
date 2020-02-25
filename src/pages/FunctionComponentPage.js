import React, { useState, useEffect } from 'react'

export default function FunctionComponentPage(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    })
    return () => {
      clearInterval(timer)
    };
  }, [])
  return (
    <div>
      <h3>FunctionComponentPage</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

