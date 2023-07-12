import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  }

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment} className={classes.btn}>Прибавить</button>
      <button onClick={decrement} className={classes.btn}>Убавить</button>
    </div>
  )
}
