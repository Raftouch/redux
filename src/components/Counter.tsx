import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../state/counter/counterSlice'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <button onClick={() => dispatch(incrementAsync(5))}>
          Increment by 5 async
        </button>
      </div>
    </div>
  )
}
