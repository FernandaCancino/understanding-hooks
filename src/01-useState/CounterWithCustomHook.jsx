import React from 'react'
import { useCounter } from '../Hooks/useCounter';

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <div>Counter With Custom Hook: { counter } </div>
      <hr />
      <button className='btn btn-primary' onClick={() => increment()}>+1</button>
      <button className='btn btn-primary' onClick={() => reset()}>reset</button>
      <button className='btn btn-primary' onClick={() => decrement()}>-1</button>
    </>
  )
}
