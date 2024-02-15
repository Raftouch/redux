import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // always state as a parameter, action is optional
    // increment: (state, action) => {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // same -->
    // incrementByAmount: (state, action: PayloadAction<{value: number}>) => {
    //   state.value += action.payload.value
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  // for async functions
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync/pending')
      })
      // when it's done and we have our data fetched
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload
        }
      )
  },
})

// all names are automatically saved as counter/increment, counter/decrement etc

// for async functions we do createAsyncThunk first and then reducers
// for sync functions --> first reducers
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync', // name
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for 1 sec (to mock an async funciton)
    return amount
  }
)
// we dispatched our async action with a parameter that we defined on line 52,
// then we returned an amount that is passed as a payload to line 31 in order to update a state

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
