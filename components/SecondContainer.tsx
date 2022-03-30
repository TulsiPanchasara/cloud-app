import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectCount } from '../reducers/counterSlice'

const SecondContainer = () => {
  const count = useAppSelector(selectCount)
  return <div>Second Component: {count} </div>
}

export default SecondContainer
