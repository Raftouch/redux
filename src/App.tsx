import Counter from './components/Counter'

// STORE
// --> global state

// redux & redux toolkit - for setting up a store

// SLICES
// store contains multiple slices (each responsible for a certain domain in the app)

// slice of state for the Counter called CounterState - a part of our redux state
interface CounterState {
  value: number
}

// slice of state for the User
interface UserState {
  isSignedIn: boolean
}

// ACTIONS

// tell redux what it should do to the state
// ex. incerement/decerement a value of type number for the Counter
// Action has 2 properties :

const increment = { type: 'INCREMENT' } // Action Increment
// type: string (a name of the action, required), payload: any data that you want to send to the action to make a job (not required)
const decrement = { type: 'DECREMENT', payload: 1 } // Action Decrement
// type name is recognized as an action
// payload: 1 --> not needed as INCREMENT/DECREMENT is automatically by 1

// here payload is needed:
const incrementByAmount = { type: 'INCREMENT', payload: 10 }

// REDUCERS
// take an action & make an update to the store
// can not do updates directly to the store
// take a copy of a state/store, update it & replace the old state by a new one

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App
