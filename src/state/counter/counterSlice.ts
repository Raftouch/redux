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
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  // async functions -->
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync/pending')
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload
        }
      )
  },
})

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync', // name
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for 1 sec (to mock an async funciton)
    return amount
  }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
