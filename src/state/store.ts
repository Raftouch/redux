import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// when using TS
// we can get ReturnType of the function getState to return RootState
// this type of RootState will help us
// whenever we need to access RootState using a selector we are going to define this state using ReturnType
// and will have access to the entire state easily
export type RootState = ReturnType<typeof store.getState>

// type of our dispatch (send, ship) called AppDispatch
// when using useDispatch hook
export type AppDispatch = typeof store.dispatch
