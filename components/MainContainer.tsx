import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, selectCount } from '../reducers/counterSlice'

const MainContainer = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div className="my-5 border border-green-700 p-4">
      First Component
      <div className="mt-2">
        <button
          className="bg-black p-3 text-base text-yellow-300"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="px-3">{count}</span>
        <button
          className="bg-black p-3 text-base text-yellow-300"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default MainContainer
