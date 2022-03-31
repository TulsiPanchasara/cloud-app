import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, selectCount } from '../reducers/counterSlice'

const MainContainer = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  const router = useRouter()
  const { locale } = router

  return (
    <div>
      <button
        onClick={() => {
          router.push('/', '/', { locale: locale === 'en' ? 'fr' : 'en' })
        }}
        className="my-5 rounded bg-black px-3 py-2 font-semibold text-white "
      >
        Click Me to Change your language{' '}
      </button>
      <div className="mb-4 border border-green-700 p-4">
        <div className="font-bold">First Component</div>
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
    </div>
  )
}

export default MainContainer
