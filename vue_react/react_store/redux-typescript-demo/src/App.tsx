import React from 'react'
import { useSelector, useDispatch } from'react-redux'
import { 
  increment, 
  decrement 
} from './store/counterSlice';
import type { RootState } from './store'

function App() {
  // hooks api  
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      { count }
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default App